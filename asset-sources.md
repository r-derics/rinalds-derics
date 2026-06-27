# Website image sources

Every image in `website/assets/` is an optimized copy of an original in
`Personal Brand Photos/` or a scanned PDF in `Personal Brand Text/` (academic
documents). Originals are kept full-resolution; web copies are resized (longest
edge, px) and JPEG-compressed (quality 80). This file is the source of truth for
that mapping — update it whenever an asset is swapped.

| Web asset (`website/assets/`) | Source (`Personal Brand Photos/`)            | Max px | Used in        |
| ----------------------------- | -------------------------------------------- | ------ | -------------- |
| hero-gala.jpg                 | MyFitness Gala Ball Suit Portrait.jpg        | 1600   | Hero           |
| about-lake.jpg                | Lake Sunset Black Tee Portrait.jpg           | 1500   | About          |
| exp-admin.jpg                 | MyFitness Plavnieki Opening Team 2025-05.jpg | 1400   | Experience #1  |
| exp-warehouse.jpg             | Warehouse Pallet Rack 2025-10.jpg            | 1400   | Experience #2  |
| exp-stagecrew.jpg             | Stage Crew Xiaomi Arena.PNG                  | 1400   | Experience #3  |
| exp-charity.jpg               | Uk Work Rainy Street 2026-01.jpg             | 1400   | Experience #4  |
| disc-physique.jpg             | Physique Garden Roses 2025-07.jpg            | 1600   | Discipline     |
| disc-marathon.jpg             | Riga Marathon 21km Medal Selfie 2024-05.jpeg | 1400   | Discipline     |
| acad-school.jpg               | Rigas 64 Aplieciba (scanned).pdf p1          | 1400   | Academics — school   |
| acad-school-transcript.jpg    | Rigas 64 Aplieciba (scanned).pdf p3          | 1400   | Academics — school   |
| acad-rtk-diploma.jpg          | RTK Diploms (scanned).pdf p2                 | 1400   | Academics — RTK      |
| acad-rtk-transcript.jpg       | RTK Diploms (scanned).pdf p3                 | 1400   | Academics — RTK      |
| acad-rtk-silver-2024.jpg      | All Diplomas (scanned).pdf p3                | 1400   | Academics — RTK      |
| acad-rtk-silver-2023.jpg      | All Diplomas (scanned).pdf p5                | 1400   | Academics — RTK      |
| acad-rtk-bronze-2024.jpg      | All Diplomas (scanned).pdf p4                | 1400   | Academics — RTK      |
| acad-rtk-recognition.jpg      | All Diplomas (scanned).pdf p6 (Pateicība)    | 1400   | Academics — RTK      |
| contact-cherry.jpg            | Cherry Blossom Park White Outfit Close Up.jpg| 1300   | Contact        |
| cv.pdf                        | Personal Brand Text/Rinalds_Dērics_CV.pdf    | —      | View/Download CV |

## Generated (not from the photo library)

| Asset                                                  | How it's made                                  |
| ------------------------------------------------------ | ---------------------------------------------- |
| og-image.jpg                                           | 1200×630 social card composed from hero-gala.jpg |
| favicon-32 / apple-touch-icon / icon-192 / icon-512.png| Generated from `assets/Rinalds-Derics logo.png` (transparent clay RD mark), centered on a transparent square |
