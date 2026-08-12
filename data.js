/*
  ROXY — Music Scoring Catalog Data
  ------------------------------------------------------------
  Each entry describes one score/track. Add new entries via editor.html,
  which will regenerate this file for you (copy/download and replace
  this one, then commit to the repo along with the audio file).

  Schema:
  {
    id:               string   — unique ID, e.g. "MS001"
    title:            string   — track title / cue name
    moodGenre:        array    — tags like ["Corporate","Upbeat"]
    tempoBpm:         number   — beats per minute (0 if unknown)
    durationSec:      number   — length in seconds
    licensing:        string   — "Royalty-Free" | "Licensed" | "In-House Original" | "Expiring"
    licenseExpiry:    string   — "YYYY-MM-DD" or "" if not applicable
    instrumentation:  array    — e.g. ["Piano","Strings"]
    sourceLibrary:    string   — e.g. "Epidemic Sound", "AudioJungle", "Original Composition"
    audioFile:        string   — direct-play OneDrive link to the file (see README for how to convert a share link into one)
    notes:            string   — free text
    dateAdded:        string   — "YYYY-MM-DD"
  }
*/

window.MUSIC_DATA = [
  {
    id: "MS001",
    title: "Galit",
    moodGenre: [],
    tempoBpm: 152,
    durationSec: 104,
    licensing: "",
    licenseExpiry: "",
    instrumentation: [],
    sourceLibrary: "",
    audioFile: "PASTE_ONEDRIVE_DIRECT_LINK_HERE",
    notes: "Tempo auto-detected via beat tracking — verify by ear, can be off by 2x on some tracks.",
    dateAdded: "2026-08-12"
  },
  {
    id: "MS002",
    title: "Crime of Passion",
    moodGenre: [],
    tempoBpm: 144,
    durationSec: 131,
    licensing: "",
    licenseExpiry: "",
    instrumentation: [],
    sourceLibrary: "",
    audioFile: "PASTE_ONEDRIVE_DIRECT_LINK_HERE",
    notes: "Tempo auto-detected via beat tracking — verify by ear, can be off by 2x on some tracks.",
    dateAdded: "2026-08-12"
  },
  {
    id: "MS003",
    title: "Spartans",
    moodGenre: [],
    tempoBpm: 123,
    durationSec: 72,
    licensing: "",
    licenseExpiry: "",
    instrumentation: [],
    sourceLibrary: "",
    audioFile: "PASTE_ONEDRIVE_DIRECT_LINK_HERE",
    notes: "Tempo auto-detected via beat tracking — verify by ear, can be off by 2x on some tracks.",
    dateAdded: "2026-08-12"
  },
  {
    id: "MS004",
    title: "Weak Pulse",
    moodGenre: [],
    tempoBpm: 99,
    durationSec: 107,
    licensing: "",
    licenseExpiry: "",
    instrumentation: [],
    sourceLibrary: "",
    audioFile: "PASTE_ONEDRIVE_DIRECT_LINK_HERE",
    notes: "Tempo auto-detected via beat tracking — verify by ear, can be off by 2x on some tracks.",
    dateAdded: "2026-08-12"
  },
  {
    id: "MS005",
    title: "Sus Doomed Ref Score",
    moodGenre: [],
    tempoBpm: 118,
    durationSec: 96,
    licensing: "",
    licenseExpiry: "",
    instrumentation: [],
    sourceLibrary: "",
    audioFile: "PASTE_ONEDRIVE_DIRECT_LINK_HERE",
    notes: "Tempo auto-detected via beat tracking — verify by ear, can be off by 2x on some tracks.",
    dateAdded: "2026-08-12"
  }
];
