import type { Project } from "@/types/project";

export const PROJECTS_DATA: readonly Project[] = [
  // Curated order for the "All" category view
  // Dynamic alternating rhythm:
  // Row 1: 4 Vertical cards (max 4 in a row)
  // Row 2: 3 Horizontal YouTube cards (max 3 in a row, consistent with Cinematic Videos)
  // Row 3: 4 Vertical cards (max 4 in a row)
  // Row 4: 3 Horizontal YouTube cards (max 3 in a row)
  // Row 5: 2 Horizontal YouTube cards (max 3 in a row)

  // --- Row 1: 4 Vertical Cards (Col 1 to 4) ---
  {
    id: "matchday-intensity",
    title: "Photo Colorgrading",
    client: "FC Bayern / Football Creator",
    category: "Short-Form Content",
    platform: "Instagram",
    views: "2.4M",
    year: "2020",
    duration: "00:45",
    thumbnail: "/images/Standbild_Hassel_See.png",
    externalUrl:
      "https://www.instagram.com/reel/CHxslxsClrx/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    description:
      "Hochenergetischer Matchday Edit mit Speed-Ramping, Sound-Design und nahtlosen Match-Cuts direkt aus dem Stadion.",
  },
  {
    id: "neon-velocity",
    title: "Instagram Story Edit",
    client: "Porsche Club Central",
    category: "Short-Form Content",
    platform: "Shorts",
    views: "3.1M",
    year: "2019",
    duration: "00:30",
    thumbnail: "/images/Standbild_Instastory.png",
    videoEmbedUrl: "https://www.youtube.com/embed/BYxFj-YJCa8?autoplay=1&rel=0",
    externalUrl: "https://youtube.com/shorts/BYxFj-YJCa8?si=ZEX6fdwK9y6Kvlst",
    description:
      "Vertikales 9:16 Reel mit dynamischem Car-Rig, rasantem Pacing und trendsetzendem Color Grading für Social Media.",
  },
  {
    id: "el-clasico-thrill",
    title: "Nordfrost-Cup",
    client: "La Liga / EA Sports FC",
    category: "Football Edits",
    platform: "TikTok",
    views: "1.8M",
    year: "2025",
    duration: "00:38",
    thumbnail: "/images/Standbild_Halle_Wilhelmshaven.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7312061119777017121",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7312061119777017121?is_from_webapp=1&sender_device=pc",
    description:
      "Dramatischer Matchday-Teaser mit synchronisierten Bass-Drops, Glitch-Transitions und dynamischem Player-Tracking.",
  },
  {
    id: "urban-minimal-drop",
    title: "BSV-Cup-Match",
    client: "VERVE Streetwear Tokyo",
    category: "Football Edits",
    platform: "TikTok",
    views: "950K",
    year: "2024",
    duration: "00:24",
    thumbnail: "/images/Standbild_Blumenthal_Weyhe.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7372165811261246753",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7372165811261246753?is_from_webapp=1&sender_device=pc",
    description:
      "Trend-orientiertes Fashion Reel mit Match-Cuts, Typografie-Overlays und viraler Sound-Synchronisation.",
  },

  // --- Row 2: 3 Horizontal Cards (Col 1 to 3, max 3 in a row) ---
  {
    id: "photo-colorgrading",
    title: "The Flash Effect",
    client: "Creative Post-Production",
    category: "VFX & Experiments",
    platform: "YouTube",
    year: "2021",
    duration: "01:20",
    thumbnail: "/images/Standbild_TheFlash.png",
    videoEmbedUrl: "https://www.youtube.com/embed/0X4VN9Vov3k?autoplay=1&rel=0",
    externalUrl: "https://youtu.be/0X4VN9Vov3k?si=eTrD8AYnn5dppPRO",
    description:
      "Detailliertes Color Grading Breakdown und Post-Processing Workflow in DaVinci Resolve.",
  },
  {
    id: "echoes-of-the-north",
    title: "Hausmessung mit Ju",
    client: "Nordic Tourism & Gear",
    category: "Comedy & Entertainment",
    platform: "YouTube",
    year: "2025",
    duration: "01:45",
    thumbnail: "https://img.youtube.com/vi/NCyABqp1da8/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/NCyABqp1da8?autoplay=1&rel=0",
    externalUrl: "https://youtu.be/NCyABqp1da8?si=2QZKJ67AOu_XhVS4",
    description:
      "Eine atemberaubende Winterexpedition in den Weiten Skandinaviens. Gedreht auf Sony FX9 in 4K DCI mit Vintage Cinema Glass.",
  },
  {
    id: "neural-genesis",
    title: "Neural Genesis 2099",
    client: "CyberArts Collective",
    category: "VFX & Experiments",
    platform: "YouTube",
    year: "2020",
    duration: "01:45",
    thumbnail:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80",
    externalUrl: "https://www.youtube.com",
    description:
      "Cineastischer Sci-Fi Teaser mit Diffusionsmodellen generiert, durch Runway Gen-3 animiert und mit Dolby 5.1 Sound veredelt.",
  },

  // --- Row 3: 4 Vertical Cards (Col 1 to 4) ---
  {
    id: "limitless-grind",
    title: "Photo Colorgrading 2",
    client: "APEX Gym & Performance",
    category: "Short-Form Content",
    platform: "Instagram",
    views: "1.5M",
    year: "2025",
    duration: "00:28",
    thumbnail: "/images/Standbild_Garten_Fussball.png",
    videoEmbedUrl: "https://www.instagram.com/reel/CHNo0AwC-t0/embed/",
    externalUrl:
      "https://www.instagram.com/reel/CHNo0AwC-t0/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    description:
      "Hochenergetisches Fitness Reel mit Hard-Cuts, Bass-Pumping Sound-Design und düsterer Cinematic-Ausleuchtung.",
  },
  {
    id: "top-scorer-legacy",
    title: "Union 60 Vs. Neustadt",
    client: "UEFA Champions League",
    category: "Football Edits",
    platform: "TikTok",
    views: "890K",
    year: "2025",
    duration: "00:52",
    thumbnail: "/images/Standbild_Union_Neustadt.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7688061900420156705",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7688061900420156705?is_from_webapp=1&sender_device=pc",
    description:
      "Cineastischer Spieler-Fokus mit 3D-Kameratracking, VFX-Sparks und emotionalem Voiceover-Storytelling.",
  },
  {
    id: "sonic-horizon-audio",
    title: "Sonic Horizon Audio",
    client: "KRONOS Tech Global",
    category: "Short-Form Content",
    platform: "Instagram",
    views: "720K",
    year: "2024",
    duration: "00:22",
    thumbnail:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80",
    externalUrl: "https://www.instagram.com",
    description:
      "Schneller 9:16 Tech-Teaser mit Macro-Shots, Sound-FX und nahtlosen Seamless Zoom-Transitions.",
  },
  {
    id: "street-to-stadium",
    title: "HTB-Budenzauber-Cup",
    client: "Nike Football Campaign",
    category: "Football Edits",
    platform: "TikTok",
    views: "1.2M",
    year: "2024",
    duration: "00:40",
    thumbnail: "/images/Standbild_Halle_Budenzauber.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7321379056786689313",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7321379056786689313?is_from_webapp=1&sender_device=pc",
    description:
      "Schnelle Urban-Cuts mit Beat-Sync, rotoskopierten Glow-Linien und Street-Football Ästhetik.",
  },

  // --- Row 4: 3 Horizontal Cards (Col 1 to 3, max 3 in a row) ---
  {
    id: "artisans-of-florence",
    title: "The Artisans of Florence",
    client: "European Heritage Trust",
    category: "Cinematic Videos",
    platform: "YouTube",
    year: "2024",
    duration: "18:20",
    thumbnail:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    externalUrl: "https://www.youtube.com",
    description:
      "Ein intimer Blick in historische Werkstätten toskanischer Leder- und Goldschmiede. Ausgezeichnet beim Indie Cinefest.",
  },
  {
    id: "cyber-pulse-vfx",
    title: "Cyber Pulse VFX",
    client: "AURA Music & Visuals",
    category: "VFX & Experiments",
    platform: "YouTube",
    year: "2024",
    duration: "02:15",
    thumbnail:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    externalUrl: "https://www.youtube.com",
    description:
      "Experimentelle Visual Effects, 3D-Compositing in Blender & After Effects sowie holografische HUD-Overlays.",
  },
  {
    id: "morphing-dimensions",
    title: "Morphing Dimensions",
    client: "Sonar Music Festival",
    category: "AI Video Creation",
    platform: "YouTube",
    year: "2025",
    duration: "02:10",
    thumbnail:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    externalUrl: "https://www.youtube.com",
    description:
      "Hypnotische audiovisuelle Experience mit generativen 3D-Fraktalen, Audio-Reactivity und surrealen Raumtransformationen.",
  },

  // --- Row 5: 2 Horizontal Cards (Col 1 & 2, max 3 in a row) ---
  {
    id: "astral-drift-vfx",
    title: "Astral Drift CGI",
    client: "Hyperion Sci-Fi Studio",
    category: "VFX & Experiments",
    platform: "YouTube",
    year: "2024",
    duration: "01:50",
    thumbnail:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
    externalUrl: "https://www.youtube.com",
    description:
      "Surreale prozedurale Partikelsimulationen, volumetrisches Licht und Unreal Engine 5 Real-Time Rendering.",
  },
  {
    id: "digital-human-lore",
    title: "Avatars & Echoes",
    client: "Virtual Identity Labs",
    category: "AI Video Creation",
    platform: "YouTube",
    year: "2024",
    duration: "01:10",
    thumbnail:
      "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80",
    externalUrl: "https://www.youtube.com",
    description:
      "Fotorealistische digitale Avatare und Neural Rendering kombiniert mit High-End Motion Capture Daten.",
  },
] as const;
