# Guestbook application image: Go multi-stage build
# Build stage: compile the Go binary
FROM golang:1.22 AS builder
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY main.go ./
RUN CGO_ENABLED=0 go build -o /guestbook .

# Deploy stage: ship the binary plus the frontend files
FROM gcr.io/distroless/static-debian12
WORKDIR /
COPY --from=builder /guestbook /guestbook
COPY public/ /public/
EXPOSE 3000
CMD ["/guestbook"]
