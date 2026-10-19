import { getImageUrl } from "@/lib/cdn";

export interface EmbroideryDesign {
  id: string;
  title: string;
  filename: string;
  image: string;
  material: "Embroidered";
  category: "Automotive" | "Industrial" | "Emergency & Tactical" | "Corporate & Crest" | "Sports & Uniform";
}

// 15 unique, non-duplicated embroidery designs specifically designated for the Collections Salon Gallery
export const EMBROIDERY_DESIGNS: EmbroideryDesign[] = [
  {
    id: "emb-salon-01",
    title: "Motorsports Racing Team Patch",
    filename: "6066659c-0239-443c-9bec-0d7f60df92ce.webp",
    image: getImageUrl("/images/embroidery/6066659c-0239-443c-9bec-0d7f60df92ce.webp"),
    material: "Embroidered",
    category: "Automotive",
  },
  {
    id: "emb-salon-02",
    title: "Commercial Fleet Service Insignia",
    filename: "7358a70d-cbdb-4156-ad4a-c182d3dcd5ce.webp",
    image: getImageUrl("/images/embroidery/7358a70d-cbdb-4156-ad4a-c182d3dcd5ce.webp"),
    material: "Embroidered",
    category: "Industrial",
  },
  {
    id: "emb-salon-03",
    title: "Athletic Championship Golden Emblem",
    filename: "73ca64a6-a7d5-4c45-8d66-f4f0acf98d75.webp",
    image: getImageUrl("/images/embroidery/73ca64a6-a7d5-4c45-8d66-f4f0acf98d75.webp"),
    material: "Embroidered",
    category: "Sports & Uniform",
  },
  {
    id: "emb-salon-04",
    title: "Security Force Officer Patch",
    filename: "7571cad3-6834-4ded-a431-3cacb7fab0ff.webp",
    image: getImageUrl("/images/embroidery/7571cad3-6834-4ded-a431-3cacb7fab0ff.webp"),
    material: "Embroidered",
    category: "Emergency & Tactical",
  },
  {
    id: "emb-salon-05",
    title: "Precision Monogram Left-Chest Patch",
    filename: "7a87b989-229d-45f3-8809-f67fe3e29ff7.webp",
    image: getImageUrl("/images/embroidery/7a87b989-229d-45f3-8809-f67fe3e29ff7.webp"),
    material: "Embroidered",
    category: "Corporate & Crest",
  },
  {
    id: "emb-salon-06",
    title: "Military Veteran Service Crest",
    filename: "90746538-274a-42c2-99ff-14a7ff42f2c2.webp",
    image: getImageUrl("/images/embroidery/90746538-274a-42c2-99ff-14a7ff42f2c2.webp"),
    material: "Embroidered",
    category: "Emergency & Tactical",
  },
  {
    id: "emb-salon-07",
    title: "Craft Brewery Heritage Patch",
    filename: "9574b008-d2d2-4695-9b6d-366fb9cc82bf.webp",
    image: getImageUrl("/images/embroidery/9574b008-d2d2-4695-9b6d-366fb9cc82bf.webp"),
    material: "Embroidered",
    category: "Corporate & Crest",
  },
  {
    id: "emb-salon-08",
    title: "Search & Rescue K9 Unit Emblem",
    filename: "96b75709-c2d7-4b88-a1e5-010d0cf07629.webp",
    image: getImageUrl("/images/embroidery/96b75709-c2d7-4b88-a1e5-010d0cf07629.webp"),
    material: "Embroidered",
    category: "Emergency & Tactical",
  },
  {
    id: "emb-salon-09",
    title: "Rugged Mountain Guide Badge",
    filename: "9c109bbb-b227-4f4e-9d3d-56fae3c5016f.webp",
    image: getImageUrl("/images/embroidery/9c109bbb-b227-4f4e-9d3d-56fae3c5016f.webp"),
    material: "Embroidered",
    category: "Sports & Uniform",
  },
  {
    id: "emb-salon-10",
    title: "Precision Micro-Stitch Logo",
    filename: "9ce655b6-dd90-4541-8bcb-88e317fdd98c.webp",
    image: getImageUrl("/images/embroidery/9ce655b6-dd90-4541-8bcb-88e317fdd98c.webp"),
    material: "Embroidered",
    category: "Corporate & Crest",
  },
  {
    id: "emb-salon-11",
    title: "Custom Hotrod & Garage Patch",
    filename: "9df7dfeb-61bd-4efb-a34a-cdb3a9789f02.webp",
    image: getImageUrl("/images/embroidery/9df7dfeb-61bd-4efb-a34a-cdb3a9789f02.webp"),
    material: "Embroidered",
    category: "Automotive",
  },
  {
    id: "emb-salon-12",
    title: "Wilderness Ranger Division Insignia",
    filename: "a85949b1-3786-4718-9d46-a22862bc0357.webp",
    image: getImageUrl("/images/embroidery/a85949b1-3786-4718-9d46-a22862bc0357.webp"),
    material: "Embroidered",
    category: "Emergency & Tactical",
  },
  {
    id: "emb-salon-13",
    title: "Corporate Staff Uniform Emblem",
    filename: "ac096be9-f997-4f9f-b7d9-cf3e72912cd0.webp",
    image: getImageUrl("/images/embroidery/ac096be9-f997-4f9f-b7d9-cf3e72912cd0.webp"),
    material: "Embroidered",
    category: "Corporate & Crest",
  },
  {
    id: "emb-salon-14",
    title: "Special Task Force Commemorative Patch",
    filename: "e008e4d0-5df0-4cd9-94e5-617fae9b1c62.webp",
    image: getImageUrl("/images/embroidery/e008e4d0-5df0-4cd9-94e5-617fae9b1c62.webp"),
    material: "Embroidered",
    category: "Emergency & Tactical",
  },
  {
    id: "emb-salon-15",
    title: "Industrial Manufacturing Technician Badge",
    filename: "e0c27d2f-a9de-4ef7-9035-640601439a5d.webp",
    image: getImageUrl("/images/embroidery/e0c27d2f-a9de-4ef7-9035-640601439a5d.webp"),
    material: "Embroidered",
    category: "Industrial",
  },
];
