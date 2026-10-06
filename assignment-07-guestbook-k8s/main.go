// Command guestbook serves the Guestbook front end and entries API.
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"
)

var (
	mu      sync.Mutex
	entries []string
)

func entriesHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		mu.Lock()
		defer mu.Unlock()
		w.Header().Set("Content-Type", "application/json")
		if entries == nil {
			entries = []string{}
		}
		json.NewEncoder(w).Encode(entries)
	case http.MethodPost:
		var body struct {
			Entry string `json:"entry"`
		}
		if err := json.NewDecoder(r.Body).Decode(&body); err != nil || body.Entry == "" {
			http.Error(w, "entry is required", http.StatusBadRequest)
			return
		}
		mu.Lock()
		entries = append(entries, body.Entry)
		mu.Unlock()
		w.WriteHeader(http.StatusCreated)
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
	}
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("public")))
	http.HandleFunc("/entries", entriesHandler)
	log.Println("Guestbook listening on :3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
