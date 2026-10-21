# Eigene Videos / Videos Folder

Lege hier deine eigenen Videodateien ab (z. B. MP4 oder WebM).

### Verwendungsbeispiele im Code:
Dateien in diesem Ordner sind in der gesamten Website direkt über `/videos/<Dateiname>` abrufbar.

**Beispiel:**
Wenn du eine Datei `showreel.mp4` hier ablegst (`public/videos/showreel.mp4`), kannst du sie im Code so einbinden:
```html
<video src="/videos/showreel.mp4" controls />
```
Oder in `src/data/projectsData.ts`:
```ts
videoUrl: '/videos/showreel.mp4'
```

### Empfohlene Formate & Tipps:
- **Format**: MP4 (H.264 / AAC) oder WebM
- **Auflösung**: 1080p (Full HD) oder 4K
- **Tipp für schnelle Ladezeiten**: Videos vorab mit Tools wie *HandBrake* auf Web-Optimierung komprimieren (CRF 20–23).

