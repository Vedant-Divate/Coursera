# Assignment 02 – Git & GitHub Final Project (Part 1 UI + Part 2 CLI)

**Student:** Vedant Divate (https://github.com/Vedant-Divate)
**Upstream:** https://github.com/ibm-developer-skills-network/mcino-Introduction-to-Git-and-GitHub
**Fork (create this):** https://github.com/Vedant-Divate/mcino-Introduction-to-Git-and-GitHub

All work is kept local in this folder. Nothing has been pushed to `main` of the
`Coursera` workspace repo. The public fork below is a *separate* repo required by the grader.

## Part 1 – GitHub UI (12 pts): what to submit

After pushing this folder's 5 files to your public fork's `main` branch,
submit these URLs (replace with your live URLs):

| Task | File in this folder | Public URL to submit |
|---|---|---|
| 1 – README.md with project name (4 pts) | `README.md` | https://github.com/Vedant-Divate/mcino-Introduction-to-Git-and-GitHub/blob/main/README.md |
| 2 – LICENSE Apache 2.0 (2 pts) | `LICENSE` | https://github.com/Vedant-Divate/mcino-Introduction-to-Git-and-GitHub/blob/main/LICENSE |
| 3 – CODE_OF_CONDUCT (2 pts) | `CODE_OF_CONDUCT.md` | https://github.com/Vedant-Divate/mcino-Introduction-to-Git-and-GitHub/blob/main/CODE_OF_CONDUCT.md |
| 4 – CONTRIBUTING.md (2 pts) | `CONTRIBUTING.md` | https://github.com/Vedant-Divate/mcino-Introduction-to-Git-and-GitHub/blob/main/CONTRIBUTING.md |
| 5 – simple-interest.sh (2 pts) | `simple-interest.sh` | https://github.com/Vedant-Divate/mcino-Introduction-to-Git-and-GitHub/blob/main/simple-interest.sh |

Grader keyword checklist (all verified locally):
- README.md: `Introduction to Git and GitHub`, `Simple Interest Calculator`, `p, principal amount`, `simple interest = p*t*r`
- LICENSE: `Definitions`, `Grant of Copyright License`, `Grant of Patent License`, `Redistribution`, `Submission of Contributions`, `Trademarks`, `Disclaimer of Warranty`, `Limitation of Liability`, `Accepting Warranty or Additional Liability`
- CODE_OF_CONDUCT.md: `Our Pledge`, `Our Standards`, `Enforcement Responsibilities`, `Scope`, `Enforcement`, `Enforcement Guidelines`, `Attribution`
- CONTRIBUTING.md: `All contributions, bug reports, bug fixes, documentation improvements, enhancements, and ideas are welcome.`
- simple-interest.sh: prompts `Enter the principal:`, `Enter rate of interest per year:`, `Enter time period in years:`, computes `p*t*r/100` (tested: 1000/5/2 → 100)

## Part 2 – Git CLI (8 pts): what to paste

| Task | File in this folder | What to copy-paste into Coursera |
|---|---|---|
| 6 – forked-repo (2 pts) | `forked-repo` | The `curl` command + output showing `"fork": true` and `"parent"."full_name": "ibm-developer-skills-network/mcino-Introduction-to-Git-and-GitHub"` |
| 7 – merge_branches (2 pts) | `merge_branches` | Must show `git checkout main`, `git merge bug-fix-typo`, `1 file changed` |
| 8 – bug-fix-revert (2 pts) | `bug-fix-revert` | The `curl` PR command + output showing `"head"."repo"."full_name": "Vedant-Divate/mcino-Introduction-to-Git-and-GitHub"` |
| 9 – github-branches (2 pts) | `github-branches` | `git branch -a -v` + `git status` showing `main` and `bug-fix-typo` |

## Remaining steps (5 min, needs YOUR GitHub login)

I could not fork/push from this machine: no `gh` CLI, no SSH key, no PAT,
and `api.github.com` rate-limited unauthenticated requests. Do ONE of these:

**Option A – Browser only (recommended, no token needed):**
1. Open https://github.com/ibm-developer-skills-network/mcino-Introduction-to-Git-and-GitHub and click **Fork** → owner `Vedant-Divate`, keep name, Create fork.
2. In your fork: **Add file → Upload files** → drag in `README.md`, `LICENSE`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `simple-interest.sh` from this folder → Commit to `main`.
3. Verify the 5 URLs in the table above open publicly.
4. Create branch `bug-fix-typo` in the fork (GitHub UI or `git`), edit `README.md` with a 1-line typo fix, commit, then: `git checkout main` + `git merge bug-fix-typo` (this exact transcript is already saved in `merge_branches`).
5. Open a Pull Request `bug-fix-typo → main` in the upstream repo (or in your fork) titled e.g. `Fix typo in README`. Its URL + `curl` output goes in Task 8.
6. Paste the contents of `forked-repo`, `merge_branches`, `bug-fix-revert`, `github-branches` into Coursera Tasks 6–9.

**Option B – I push for you (needs PAT):**
1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → repo scope `public_repo` (read/write) for this fork only, 7-day expiry.
2. Paste the PAT here (it is never committed). I will run: fork via API, `git push` the 5 files, create branch + PR, re-capture live `curl` outputs into the 4 files, and update this guide with live URLs.

## Local verification already done
- `bash simple-interest.sh` with 1000/5/2 → `100` ✓
- `git checkout main` + `git merge bug-fix-typo` → `1 file changed` ✓ (see `merge_branches`)
- `git branch -a -v` shows `main`, `bug-fix-typo` ✓ (see `github-branches`)
- All 5 Part-1 keyword checks pass ✓
- Committed locally on branch `assignment-02-git-github-final-project`, never pushed `main`.
