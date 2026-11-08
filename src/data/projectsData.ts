import type { Project } from "@/types/project";

export const PROJECTS_DATA: readonly Project[] = [
  // Curated order for the "All" category view
  // Dynamic alternating rhythm:
  // Row 1: 4 Vertical cards (max 4 in a row)
  // Row 2: 3 Horizontal YouTube cards (max 3 in a row, consistent with Cinematic Videos)
  // Row 3: 4 Vertical cards (max 4 in a row)
  // Row 4: 2 Horizontal YouTube cards (max 3 in a row)
  // Row 5: 1 Horizontal YouTube card (max 3 in a row)

  // --- Row 1: 4 Vertical Cards (Col 1 to 4) ---
  {
    id: "photo-colorgrading-1",
    title: "Photo Colorgrading 1",
    client: "FC Bayern / Football Creator",
    category: "Short-Form Content",
    platform: "Instagram",
    views: "297",
    year: "2020",
    duration: "00:45",
    thumbnail: "/images/Standbild_Hassel_See.png",
    externalUrl:
      "https://www.instagram.com/reel/CHxslxsClrx/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    description:
      "Atmospheric color grading breakdown featuring a before-and-after comparison of an autumnal outdoor lake photoshoot.",
  },
  {
    id: "instagram-story-edit",
    title: "Instagram Story Edit",
    client: "Porsche Club Central",
    category: "Short-Form Content",
    platform: "Shorts",
    views: "188",
    year: "2019",
    duration: "00:30",
    thumbnail: "/images/Standbild_Instastory.png",
    videoEmbedUrl: "https://www.youtube.com/embed/BYxFj-YJCa8?autoplay=1&rel=0",
    externalUrl: "https://youtube.com/shorts/BYxFj-YJCa8?si=ZEX6fdwK9y6Kvlst",
    description:
      "Dynamic social media story edit featuring rhythmic pacing, kinetic typography, and bespoke sound design.",
  },
  {
    id: "el-clasico-thrill",
    title: "Nordfrost-Cup",
    client: "La Liga / EA Sports FC",
    category: "Football Edits",
    platform: "TikTok",
    views: "314K",
    year: "2025",
    duration: "00:38",
    thumbnail: "/images/Standbild_Halle_Wilhelmshaven.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7312061119777017121",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7312061119777017121?is_from_webapp=1&sender_device=pc",
    description:
      "High-octane indoor football edit from the Nordfrost-Cup in Wilhelmshaven, packed with rapid match-cuts, bass drops, and clutch goals.",
  },
  {
    id: "bsv-cup-match",
    title: "BSV-Cup-Match",
    client: "VERVE Streetwear Tokyo",
    category: "Football Edits",
    platform: "TikTok",
    views: "1.2M",
    year: "2024",
    duration: "00:24",
    thumbnail: "/images/Standbild_Blumenthal_Weyhe.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7372165811261246753",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7372165811261246753?is_from_webapp=1&sender_device=pc",
    description:
      "High-energy match recap of Blumenthal vs. Weyhe at the BSV-Cup featuring tight beat-syncs and intense on-pitch duels.",
  },

  // --- Row 2: 3 Horizontal Cards (Col 1 to 3, max 3 in a row) ---
  {
    id: "the-flash",
    title: "The Flash",
    client: "Creative Post-Production",
    category: "VFX & Experiments",
    platform: "YouTube",
    year: "2021",
    duration: "01:20",
    thumbnail: "/images/Standbild_TheFlash.png",
    videoEmbedUrl: "https://www.youtube.com/embed/0X4VN9Vov3k?autoplay=1&rel=0",
    externalUrl: "https://youtu.be/0X4VN9Vov3k?si=eTrD8AYnn5dppPRO",
    description:
      "Cinematic color grading and look development in DaVinci Resolve demonstrated on a dramatic Flash-inspired portrait.",
  },
  {
    id: "hausmessung-mit-ju",
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
      "Entertaining comedy and lifestyle vlog exploring house surveying with Ju — driven by witty storytelling, fast-paced comedic timing, and situational humor.",
  },
  {
    id: "text-animation",
    title: "Text Animation",
    client: "CyberArts Collective",
    category: "VFX & Experiments",
    platform: "YouTube",
    year: "2020",
    duration: "01:45",
    thumbnail: "https://img.youtube.com/vi/wa6TPCOxA3M/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/wa6TPCOxA3M?autoplay=1&rel=0",
    externalUrl: "https://youtu.be/wa6TPCOxA3M?si=vrLKOMb35NZHLRq9",
    description:
      "Creative motion graphics and kinetic typography animation featuring seamless transitions, kinetic text design, and audio synchronization.",
  },

  // --- Row 3: 4 Vertical Cards (Col 1 to 4) ---
  {
    id: "photo-colorgrading-2",
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
      "Summer backyard football reel showcasing vibrant color grading, slow-motion trick shots, and dynamic ball tracking.",
  },
  {
    id: "union-60-vs-neustadt",
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
      "Intense matchday showcase capturing the rivalry between Union 60 and Neustadt with dramatic match-cuts and raw emotion.",
  },
  {
    id: "braunschweig-vs-weyhe",
    title: "Braunschweig Vs. Weyhe",
    client: "KRONOS Tech Global",
    category: "Short-Form Content",
    platform: "TikTok",
    views: "720K",
    year: "2024",
    duration: "00:22",
    thumbnail: "/images/Standbild_Braunschweig_Weyhe.png",
    videoEmbedUrl: "https://www.tiktok.com/player/v1/7363268395485203745",
    externalUrl:
      "https://www.tiktok.com/@haodg10/video/7363268395485203745?is_from_webapp=1&sender_device=pc",
    description:
      "Fast-paced match edit of Braunschweig vs. Weyhe featuring dynamic speed-ramping, hard-hitting tackles, and punchy audio.",
  },
  {
    id: "htb-budenzauber-cup",
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
      "Pure indoor football action at the HTB-Budenzauber tournament with lightning-fast transitions, goals, and driving beat synchronization.",
  },

  // --- Row 4: 2 Horizontal Cards (Col 1 & 2, max 3 in a row) ---
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
      "Experimental visual effects, 3D compositing in Blender & After Effects, and futuristic holographic HUD overlays.",
  },
  {
    id: "abc-song",
    title: "ABC-Song",
    client: "Sonar Music Festival",
    category: "AI Video Creation",
    platform: "YouTube",
    year: "2026",
    duration: "02:10",
    thumbnail: "https://img.youtube.com/vi/k_EJ3AXGLfQ/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/k_EJ3AXGLfQ?autoplay=1&rel=0",
    externalUrl: "https://youtu.be/k_EJ3AXGLfQ?si=44prARQvAWNgnNwb",
    description:
      "Vibrant AI-generated ABC song video featuring playful animations, kid-friendly visual aesthetics, and a catchy musical flow.",
  },

  // --- Row 5: 1 Horizontal Card (max 3 in a row) ---
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
      "Photorealistic digital avatars and neural rendering combined with high-end motion capture performance data.",
  },
] as const;