"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, X, Sparkles, ArrowUpRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  tag: string;
}

// 12 curated designs for each patch type on pure white studio background
// Strict Rule: Every embroidery design is used exactly once across the whole site
const GALLERY_BY_SLUG: Record<string, GalleryItem[]> = {
  "embroidered-patches": [
    { id: "emb-1", title: "Eagle Tactical Squadron Patch", image: "/images/embroidery/1b2d76db-5a99-496b-b5af-f035d43d78b0.webp", tag: "Emergency & Tactical" },
    { id: "emb-2", title: "Heritage Shield Embroidered Emblem", image: "/images/embroidery/23f96426-782a-448f-ad52-fe47d76ea937.webp", tag: "Corporate & Crest" },
    { id: "emb-3", title: "Precision Merrowed Border Insignia", image: "/images/embroidery/280450bd-82a6-4501-a69f-31b5614d12c2.webp", tag: "Corporate & Crest" },
    { id: "emb-4", title: "Emergency Response System Emblem", image: "/images/embroidery/180ac20d-921e-4432-aee7-0ebb724068d7.webp", tag: "Emergency & Tactical" },
    { id: "emb-5", title: "High-Density Varsity Sports Patch", image: "/images/embroidery/2cc23cde-3bb0-4f4e-96e7-c5205cb48ad3.webp", tag: "Sports & Uniform" },
    { id: "emb-6", title: "Fire & Rescue Department Emblem", image: "/images/embroidery/3185e84c-5626-4f73-b33a-6f649d68381d.webp", tag: "Emergency & Tactical" },
    { id: "emb-7", title: "Outdoor Exploration Trail Crest", image: "/images/embroidery/3a3d6a15-0258-4549-ac88-559efb0be921.webp", tag: "Sports & Uniform" },
    { id: "emb-8", title: "Tactical Division Morale Patch", image: "/images/embroidery/3ad67c63-499a-4dfd-ac24-b3935cdb7587.webp", tag: "Emergency & Tactical" },
    { id: "emb-9", title: "Heavy Equipment Service Badge", image: "/images/embroidery/46f71347-f08d-4623-b3e9-8129d8ff7352.webp", tag: "Industrial" },
    { id: "emb-10", title: "Maritime Navigation Stitched Crest", image: "/images/embroidery/4cfdb08c-a055-4190-a267-f0248eccdd43.webp", tag: "Corporate & Crest" },
    { id: "emb-11", title: "Aviation Squadron Flight Badge", image: "/images/embroidery/4e108980-36ae-4367-a2fc-5b7ffcbce5cf.webp", tag: "Emergency & Tactical" },
    { id: "emb-12", title: "Custom Law Enforcement Shield", image: "/images/embroidery/5769a4c6-344b-4d04-b6a7-1d7e7db1090d.webp", tag: "Emergency & Tactical" },
  ],

  "chenille-patches": [
    { id: "ch-1", title: "Varsity Athletic Letter 'B' Patch", image: "/images/Chennile WebP/37612dd6-9e4f-40a9-b1d8-f6fe661351c7.webp", tag: "Letterman & Jacket" },
    { id: "ch-2", title: "Championship Golden Eagle Mascot", image: "/images/Chennile WebP/534aa9a0-5f7f-4a78-b27e-360df8c03136.webp", tag: "School Spirit" },
    { id: "ch-3", title: "Vintage Campus Number Crest", image: "/images/Chennile WebP/53d2f848-5ff7-4e64-9393-d42b165ca529.webp", tag: "Varsity Number" },
    { id: "ch-4", title: "Retro Tigers Chenille Emblem", image: "/images/Chennile WebP/96d5e7ab-e879-4698-bc3e-02a1bc5fb6aa.webp", tag: "Sports Mascot" },
    { id: "ch-5", title: "Varsity State Champions Patch", image: "/images/Chennile WebP/a499bc84-5edb-4125-9003-03ec6d84a6bd.webp", tag: "Championship" },
    { id: "ch-6", title: "Collegiate Monogram Felt Chenille", image: "/images/Chennile WebP/b2c4ee1c-1e2d-4b85-9603-7abb1febb747.webp", tag: "Apparel Drop" },
    { id: "ch-7", title: "Retro Cheer & Dance Script", image: "/images/Chennile WebP/cfbd2b62-7a1b-4488-86eb-8957b05f83ba.webp", tag: "Dance & Club" },
    { id: "ch-8", title: "High-Density Felt Chenille Shield", image: "/images/Chennile WebP/e6bccd47-4ef4-43dc-8a52-45cce1076f13.webp", tag: "Varsity Crest" },
    { id: "ch-9", title: "Streetwear Fuzzy Chenille Art", image: "/images/Chennile WebP/e905ec0e-bed8-4e46-83ee-f7c98d4f3303.webp", tag: "Streetwear" },
    { id: "ch-10", title: "Gold Star Chenille Award", image: "/images/Chennile WebP/f9d39477-cbdc-4c6a-a94a-389060580a98.webp", tag: "Achievement" },
  ],

  "pvc-patches": [
    { id: "pvc-1", title: "Tactical Division Morale Patch", image: "/images/PVC WebP/0593e5cd-dc2a-4e46-bb61-e5def04a98ab.webp", tag: "Tactical Morale" },
    { id: "pvc-2", title: "Search & Rescue High-Vis 3D PVC", image: "/images/PVC WebP/105f6253-e172-4ca6-a390-19a0ff9ec46a.webp", tag: "Emergency Unit" },
    { id: "pvc-3", title: "Outdoor Expedition All-Weather Patch", image: "/images/PVC WebP/24778966-adb2-4b70-870f-52984729189b.webp", tag: "Weatherproof" },
    { id: "pvc-4", title: "Special Recon Flight Crest", image: "/images/PVC WebP/2ec98f36-c03d-4f91-9d05-ad95c4ec5d36.webp", tag: "Air Squadron" },
    { id: "pvc-5", title: "K9 Unit Molded Tactical Emblem", image: "/images/PVC WebP/308c1aea-e284-4c78-b934-1501d16f6228.webp", tag: "K9 Division" },
    { id: "pvc-6", title: "Law Enforcement Shield 3D PVC", image: "/images/PVC WebP/31958f6f-da74-40cc-8dc2-a72c2c441f8f.webp", tag: "Law Enforcement" },
    { id: "pvc-7", title: "Mountain Rescue Unit PVC", image: "/images/PVC WebP/4ba533b0-1b52-4f56-b5ce-847ebf27e979.webp", tag: "Rescue & Alpine" },
    { id: "pvc-8", title: "Security Force Hook-and-Loop Patch", image: "/images/PVC WebP/559c2b0f-18aa-484d-aff8-b8c0e2204021.webp", tag: "Security" },
    { id: "pvc-9", title: "Special Task Force Commemorative", image: "/images/PVC WebP/5a44cdf3-6f73-4780-9ed1-321413614d7d.webp", tag: "Task Force" },
    { id: "pvc-10", title: "Firefighter Maltese Cross PVC", image: "/images/PVC WebP/5e79adad-8564-4d7d-b21a-08e58fd722c9.webp", tag: "Fire & Rescue" },
    { id: "pvc-11", title: "Military Veteran Service Shield", image: "/images/PVC WebP/7ddafb18-3db6-4f7e-bc3a-b108f3a34841.webp", tag: "Veteran Service" },
    { id: "pvc-12", title: "Wilderness Ranger Rubber Crest", image: "/images/PVC WebP/8af9f2ae-f8d7-4939-92b6-8f87e0f87ff4.webp", tag: "Park Ranger" },
  ],

  "leather-patches": [
    { id: "lea-1", title: "Dirty Baron Motorcycle Club Deboss", image: "/images/Leather WebP/11dc7b26-571a-4c9c-98fb-4d7b1f27979a.webp", tag: "Biker Club" },
    { id: "lea-2", title: "Rawhide Trucker Hat Emblem", image: "/images/Leather WebP/299d8a05-a46b-4b75-b618-277f67044e1e.webp", tag: "Trucker Cap" },
    { id: "lea-3", title: "Craft Brewery Leather Roundel", image: "/images/Leather WebP/64a46fe2-61a2-4b76-9df3-81988759d6c6.webp", tag: "Craft Brand" },
    { id: "lea-4", title: "Heritage Outfitters Laser Burnished", image: "/images/Leather WebP/68525281-80dd-4b27-8c40-dd32d378d39d.webp", tag: "Apparel Brand" },
    { id: "lea-5", title: "Vintage Distressed Crazy Horse Patch", image: "/images/Leather WebP/7fcdd1d7-d9d9-4fac-a340-dbd80f857178.webp", tag: "Denim & Workwear" },
    { id: "lea-6", title: "Artisan Leather Goods Tag", image: "/images/Leather WebP/a425a704-b068-43a4-8350-c5cd06c52708.webp", tag: "Merchandise" },
    { id: "lea-7", title: "Mountain Lodge Debossed Crest", image: "/images/Leather WebP/c906d802-38ce-4f02-8acc-4be6f3c2ee5f.webp", tag: "Resort & Travel" },
    { id: "lea-8", title: "Distressed Suede Leather Patch", image: "/images/Leather WebP/f3edb031-4207-47d0-af66-785fe860ebce.webp", tag: "Outerwear" },
  ],

  "woven-patches": [
    { id: "wov-1", title: "Apex Explorations High-Density Damask Crest", image: "/images/Wooven WebP/58df48c6-cdd5-4947-8347-7028f6f71e16.webp", tag: "Fine Woven" },
    { id: "wov-2", title: "Micro-Thread Technical Brand Label", image: "/images/Wooven WebP/0144dc71-5e3b-449e-b4ef-180df37885d7.webp", tag: "High-Resolution" },
    { id: "wov-3", title: "Outdoor Expedition Merrowed Woven", image: "/images/Wooven WebP/489d7c55-9362-4851-98b0-c6739be58541.webp", tag: "Fine Lettering" },
    { id: "wov-4", title: "Heritage Leadership Gold Crest", image: "/images/Wooven WebP/0a58900f-02b7-4919-96f7-143a3a03ca55.webp", tag: "Crest Badge" },
    { id: "wov-5", title: "Pacific Surf & Mountain Merrowed Label", image: "/images/Wooven WebP/3cd13830-5704-45bc-a07f-1dfd4424aa09.webp", tag: "Damask Twill" },
    { id: "wov-6", title: "Vintage Heritage Shield Woven Patch", image: "/images/Wooven WebP/a8e01f49-a725-43ac-afc8-a053972fba24_converted.webp", tag: "Merrowed Edge" },
    { id: "wov-7", title: "Alpine Trail Adventure Club Insignia", image: "/images/Wooven WebP/d20cf8c2-a6e1-4942-ba10-07601b8e526d_converted.webp", tag: "Precision Weave" },
    { id: "wov-8", title: "Motor Classics Vintage Woven Emblem", image: "/images/Wooven WebP/db9b2a89-b642-4989-9c2c-03db7ee6d7d7_converted.webp", tag: "High Definition" },
  ],

  "silicone-patches": [
    { id: "sil-1", title: "Hilf Frag Gib Energie 3D Round Silicone Emblem", image: "/images/Silicone WebP/2ac5cc5d-94fa-4889-b6e5-066611aa1d47.webp", tag: "3D Molded" },
    { id: "sil-2", title: "Pink Ribbon Breast Cancer Awareness Silicone Badge", image: "/images/Silicone WebP/496ee1a3-0c10-4cea-a5ad-00ec373472d7.webp", tag: "Awareness" },
    { id: "sil-3", title: "Glace Bay Fire Dept. Shield Silicone Crest", image: "/images/Silicone WebP/4dcf7a59-f478-4f4f-9a76-496d1d3d0286.webp", tag: "First Responder" },
    { id: "sil-4", title: "Queens Finest 3D Pop-Out Streetwear Patch", image: "/images/Silicone WebP/90dc77d0-d222-43bd-a6ba-84c2b88cc895.webp", tag: "Streetwear" },
    { id: "sil-5", title: "UFO Cow Abduction Tactical Space Crest", image: "/images/Silicone WebP/97809f4b-a1aa-4e64-a41b-c5724b20ba4c.webp", tag: "Tactical Morale" },
    { id: "sil-6", title: "Easy Going Gamers Esports Crosshair Badge", image: "/images/Silicone WebP/afe94608-9e25-4298-96b0-d490eae92839.webp", tag: "Gaming" },
    { id: "sil-7", title: "Spiderweb Skull & Hourglass Eye Pop-Art Patch", image: "/images/Silicone WebP/c6887061-8b81-4662-a85b-3562a6d86e2c.webp", tag: "Pop Art" },
    { id: "sil-8", title: "La Mole TV 3D Dimensional Textured Mascot", image: "/images/Silicone WebP/de480fa9-f2d6-457a-8422-9bf5104ac4a5.webp", tag: "3D Textured" },
  ],

  "sublimated-patches": [
    { id: "sub-1", title: "Delaware Coastal Lighthouse Sunset Crest", image: "/images/Sublimatiob WEBP/26246876-c845-4884-99ac-448603884dd8.webp", tag: "Full Photographic" },
    { id: "sub-2", title: "Pickle Mountain Explorer Bulldog Patch", image: "/images/Sublimatiob WEBP/3e719772-4b60-4b78-b436-5a705b206aab.webp", tag: "Full-Color Art" },
    { id: "sub-3", title: "Halloween Monster Roadtrip Custom Badge", image: "/images/Sublimatiob WEBP/6ea9b97a-7c09-44dd-837d-4f7ab705ece5.webp", tag: "High Gamut Print" },
    { id: "sub-4", title: "Vintage Heritage Sunset Landscape Patch", image: "/images/Sublimatiob WEBP/f718d004-9e7c-4b5d-a4b3-405099b5f5ad.webp", tag: "Fine Gradient" },
    { id: "sub-5", title: "Outdoor Wilderness Mountain Lake Emblem", image: "/images/Sublimatiob WEBP/0799ebf8-4ef7-412d-b733-e3a306f94014.webp", tag: "Edge-to-Edge" },
    { id: "sub-6", title: "Retro Cosmic Space Odyssey Patch", image: "/images/Sublimatiob WEBP/98a05369-9ca7-4184-b7ba-bdd18444d19a.webp", tag: "Vibrant Dyes" },
    { id: "sub-7", title: "Pacific Coast Highway Sunset Badge", image: "/images/Sublimatiob WEBP/9efd1a1e-7a47-4663-9bcf-23f9caab05e1.webp", tag: "Photo Realistic" },
    { id: "sub-8", title: "Aviation Squadron Flight Helmet Insignia", image: "/images/Sublimatiob WEBP/a0147e7a-45fa-49e6-853a-fe497c000ad0.webp", tag: "Tactical Print" },
    { id: "sub-9", title: "Artisan Coffee Roasters Brand Patch", image: "/images/Sublimatiob WEBP/b1c76bb68df84ee8a2ca7ed8dfe8182e.webp", tag: "Merrowed Edge" },
    { id: "sub-10", title: "Rocky Mountain Wildlife Trail Crest", image: "/images/Sublimatiob WEBP/bb96dbdf-3895-475b-8493-5b9c785d27b7.webp", tag: "Photographic" },
    { id: "sub-11", title: "Desert Sunset Motor Expedition Emblem", image: "/images/Sublimatiob WEBP/d9457424-4686-4dfd-8229-faa60d8f66b0.webp", tag: "Gradient Color" },
    { id: "sub-12", title: "Heritage Motorcycle Club Sublimated Patch", image: "/images/Sublimatiob WEBP/df644e098fdbf9e90163ba4b4b5391a8.webp", tag: "Sublimated Stitch" },
  ],

  "iron-on-patches": [
    { id: "irn-1", title: "Varsity Athletic All-Stars Merrowed Iron-On", image: "/images/collections/iron-on-patch.webp", tag: "Heat Seal" },
    { id: "irn-2", title: "ASG K9 Unit Police & Flag Iron-On Shield", image: "/images/embroidery/96b75709-c2d7-4b88-a1e5-010d0cf07629.webp", tag: "Tactical Unit" },
    { id: "irn-3", title: "American Eagle Crossed Rifles Tactical Crest", image: "/images/embroidery/90746538-274a-42c2-99ff-14a7ff42f2c2.webp", tag: "Apparel Ready" },
    { id: "irn-4", title: "Michigan Sheriff Star Gold Heat-Seal Badge", image: "/images/embroidery/7a87b989-229d-45f3-8809-f67fe3e29ff7.webp", tag: "Department" },
    { id: "irn-5", title: "Collegiate Varsity 'MR' Monogram Iron-On", image: "/images/embroidery/7571cad3-6834-4ded-a431-3cacb7fab0ff.webp", tag: "Letterman" },
    { id: "irn-6", title: "Fierce Golden Eagle Mascot Heat-Seal Emblem", image: "/images/embroidery/73ca64a6-a7d5-4c45-8d66-f4f0acf98d75.webp", tag: "Mascot Patch" },
    { id: "irn-7", title: "Heritage Chief Feather War Bonnet Patch", image: "/images/embroidery/ac096be9-f997-4f9f-b7d9-cf3e72912cd0.webp", tag: "Permanent Bond" },
    { id: "irn-8", title: "Antler Skull & Red Roses Biker Iron-On", image: "/images/embroidery/7358a70d-cbdb-4156-ad4a-c182d3dcd5ce.webp", tag: "Biker Vest" },
    { id: "irn-9", title: "Eat The Rich Streetwear Pop Art Iron-On", image: "/images/embroidery/a85949b1-3786-4718-9d46-a22862bc0357.webp", tag: "Streetwear" },
    { id: "irn-10", title: "4x4 Off-Road Trucker Heat-Seal Patch", image: "/images/embroidery/6066659c-0239-443c-9bec-0d7f60df92ce.webp", tag: "Headwear" },
    { id: "irn-11", title: "Pastel Bat Creature Apparel Iron-On", image: "/images/embroidery/9df7dfeb-61bd-4efb-a34a-cdb3a9789f02.webp", tag: "Fashion Merch" },
    { id: "irn-12", title: "Colonial Patriot Hockey Mascot Iron-On Emblem", image: "/images/embroidery/9574b008-d2d2-4695-9b6d-366fb9cc82bf.webp", tag: "Team Jersey" },
  ],

  "pvc-keychains": [
    { id: "pvck-1", title: "GTT Neon Pink & Green 3D Rubber Keychain", image: "/images/PVC Keytain WebP/11ea7517-d14e-46df-9402-99631c94c09b-6ad90f0dd4de7.webp", tag: "3D Rubber" },
    { id: "pvck-2", title: "Mill Creek Academy Flying Mallard Fob", image: "/images/PVC Keytain WebP/4fd78dbf-5d25-4342-aaaf-c5db604137ac-6ad90f0cea3f9.webp", tag: "Die-Cut Fob" },
    { id: "pvck-3", title: "Automotive Club 3D Sculpted Key Holder", image: "/images/PVC Keytain WebP/8adf7f0a-0467-4fd0-8a6c-6c4c02beb2d0-6ad90f0d02746.webp", tag: "Motorsport" },
    { id: "pvck-4", title: "Streetwear Brand Soft-Touch PVC Key Tag", image: "/images/PVC Keytain WebP/95513fe8-df4a-4edf-9449-27771489d749-6ad90f0f29d28.webp", tag: "Streetwear" },
    { id: "pvck-5", title: "Tactical Division Weatherproof Key Fob", image: "/images/PVC Keytain WebP/a2e3a428-d4a6-498b-86c0-1c139cf96a12-6ad90f0f37035.webp", tag: "Tactical" },
    { id: "pvck-6", title: "Custom Mascot 3D Molded Key Ring", image: "/images/PVC Keytain WebP/a7d770b7-aaf1-48c6-8535-72fc4c95929a-6ad90f10114e5.webp", tag: "Mascot Fob" },
    { id: "pvck-7", title: "Outdoor Expedition All-Weather Key Ring", image: "/images/PVC Keytain WebP/b0907314-deec-45a7-8a99-8756ed993e50-6ad90f113c3c4.webp", tag: "Weatherproof" },
    { id: "pvck-8", title: "Double-Sided Molded Rubber Key Holder", image: "/images/PVC Keytain WebP/b597b0a5-2c77-4745-8ba7-45f6cf6023af-6ad90f1065b80.webp", tag: "Double-Sided" },
    { id: "pvck-9", title: "Corporate Logo Custom PVC Keychain", image: "/images/PVC Keytain WebP/c2362ac1-7028-468b-ab8d-55098769108d-6ad90f11b66d7.webp", tag: "Corporate Merch" },
  ],

  "enamel-pins": [
    { id: "pin-1", title: "Royal Lion Crest Gold Lapel Pin", image: "/images/Enamel Pins/3051384c-c62d-47ec-b705-1a6a633a8fcb.webp", tag: "Hard Enamel" },
    { id: "pin-2", title: "Virtute et Honore Polished Badge", image: "/images/Enamel Pins/54c5fa67-1ebb-4c46-b911-78817a436452.webp", tag: "Gold Plated" },
    { id: "pin-3", title: "Corporate Milestone Recognition Pin", image: "/images/Enamel Pins/1ebfa65c-13d8-432e-bb93-f1ddc4b880e6.webp", tag: "Die Struck" },
    { id: "pin-4", title: "Heritage Crown Emblem Pin", image: "/images/Enamel Pins/747b1a6e-e0e6-4678-a6e3-7a3a03e5bc60.webp", tag: "Soft Enamel" },
    { id: "pin-5", title: "Midnight Falcon Die-Cast Lapel Pin", image: "/images/Enamel Pins/6f880484-44db-450d-a4e8-24a8d7a8a4a0.webp", tag: "Black Nickel" },
    { id: "pin-6", title: "Vintage Explorer Compass Pin", image: "/images/Enamel Pins/79e2ce8b-5ddd-488a-b8fc-528e0ece9eed.webp", tag: "Antique Brass" },
    { id: "pin-7", title: "Geometric Prism Collector Pin", image: "/images/Enamel Pins/c79ca0de-e32a-47d1-8363-e8d2f4cba787.webp", tag: "Glitter Enamel" },
    { id: "pin-8", title: "Commemorative Crest Jubilee Pin", image: "/images/Enamel Pins/e7ad1708-c4cb-4507-9376-0e7a559d8712.webp", tag: "Jewelry Grade" },
  ],

  "embroidery-keychains": [
    { id: "key-1", title: "Trio Aviation Crew Stitched Flight Tags", image: "/images/Embroidery Keytain WEBP/125b3a14-acde-4c8d-adca-cda2365756cc.webp", tag: "Flight Tag" },
    { id: "key-2", title: "Lucky Number 13 Round Merrowed Key Fob", image: "/images/Embroidery Keytain WEBP/1c5bebf4-4fce-451b-b85c-f31bce5a8e85.webp", tag: "Round Fob" },
    { id: "key-3", title: "Custom Flight Tags Squadron Aviation Pack", image: "/images/Embroidery Keytain WEBP/6762830b-e120-4ea5-9c0a-eb48fdc84b74.webp", tag: "Double-Sided" },
    { id: "key-4", title: "Remove Before Flight Safety Orange Flight Tags", image: "/images/Embroidery Keytain WEBP/90e7af6d-31c6-499e-951c-aa0f450d2151.webp", tag: "Aviation Classic" },
    { id: "key-5", title: "London Prime Tattoo Sacred Gold Merrowed Tag", image: "/images/Embroidery Keytain WEBP/910d7955-c277-4016-a356-664e55214205.webp", tag: "Brand Merch" },
    { id: "key-6", title: "Personalized Custom Name Swivel Hook Keychains", image: "/images/Embroidery Keytain WEBP/a0d44bce-3d32-486a-af7a-476b0facfd49.webp", tag: "Custom Name" },
    { id: "key-7", title: "London Sacred Gold Double-Sided Fabric Tag", image: "/images/Embroidery Keytain WEBP/c5c27fa4-c85e-4f62-849b-ffc4d4f7a870.webp", tag: "Merrowed Border" },
    { id: "key-8", title: "Dream Big Stay Real Crown 4-Link Chain Fob", image: "/images/Embroidery Keytain WEBP/d438248a-2ee5-42e2-a814-67cf64a4d45a.webp", tag: "Streetwear Fob" },
    { id: "key-9", title: "Jessica Electric Blue & Yellow Embroidered Fob", image: "/images/Embroidery Keytain WEBP/f1085a5d-d497-4c3a-9e82-375030a97d9a.webp", tag: "Custom Name" },
  ],

  "sequin-patches": [
    { id: "seq-1", title: "Wolves Royal Blue & Silver Script Sequin Patch", image: "/images/Sequence webp/05598b79-25f3-493d-bc1b-33176e43d323.webp", tag: "Sports Script" },
    { id: "seq-2", title: "Wildcats Sparkling Hot Pink Sequin Script", image: "/images/Sequence webp/1ee8d767-91d2-4778-9d7b-02d4e2d6b99c.webp", tag: "Cheer & Spirit" },
    { id: "seq-3", title: "Tigers Lavender Purple Shimmer Sequin Emblem", image: "/images/Sequence webp/409f1794-b6a2-4c46-bbbd-448470bbfb28.webp", tag: "Team Script" },
    { id: "seq-4", title: "Spooky Season Halloween Pumpkin & Ghost Sequin Patch", image: "/images/Sequence webp/54a186ec-97d8-4669-a2bf-938f126f45a3.webp", tag: "Holiday Sequin" },
    { id: "seq-5", title: "Psalm 23 The Lord Is My Shepherd Gold Sequin Crest", image: "/images/Sequence webp/5597ea67-e918-4193-93ee-1f1e246091e0.webp", tag: "Jacket Crest" },
    { id: "seq-6", title: "Game Day Purple & Silver Sequin Baseball", image: "/images/Sequence webp/5af416a1-4bf4-4ec3-9361-5b61a805a3b8.webp", tag: "Game Day" },
    { id: "seq-7", title: "Gameday Varsity Hot Pink Arch Lettering", image: "/images/Sequence webp/9c380b84-f1d0-4b69-9e3d-16c3ffc16a2b (1).webp", tag: "Varsity Arch" },
    { id: "seq-8", title: "Hot Pink & Silver Shimmer Sequin Angel Wings", image: "/images/Sequence webp/af5d32d0-8a31-46fc-bb56-b6b6d119641a.webp", tag: "Fashion Wings" },
    { id: "seq-9", title: "Game Day Red & White Script Sequin Patch", image: "/images/Sequence webp/dfa21bc7-f92d-49a8-bb23-217a15a166f4.webp", tag: "Team Jersey" },
  ],
};

GALLERY_BY_SLUG["pvc-keychain"] = GALLERY_BY_SLUG["pvc-keychains"];
GALLERY_BY_SLUG["pvc-patch-design"] = GALLERY_BY_SLUG["pvc-keychains"];

export function CollectionGallery({ slug, collectionName }: { slug: string; collectionName: string }) {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const items = GALLERY_BY_SLUG[slug] || GALLERY_BY_SLUG["embroidered-patches"];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E8E6E0]">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" /> Curated Production Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Real Custom {collectionName} Work
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every design is manufactured to industrial tolerances with 100% white background studio capture. Click any patch to inspect close-up stitch detailing.
          </p>
        </div>

        {/* 12-Item Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E6E0] bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container with seamless neutral background and centered padding */}
              <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-slate-50/80 to-slate-100/40 p-5 sm:p-7 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-[0_12px_20px_rgba(20,38,61,0.16)] select-none"
                />
                {/* Zoom overlay badge */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="size-10 rounded-full bg-white/90 text-foreground shadow-lg flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="size-5 text-primary" />
                  </div>
                </div>
                {/* Tag Badge */}
                <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Title and Details */}
              <div className="p-3.5 sm:p-4 border-t border-[#F0EFEA] bg-[#FAFAF7] flex-1 flex flex-col justify-between">
                <h3 className="font-semibold text-xs sm:text-sm text-[#1A1A1A] line-clamp-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-medium text-primary">View specimen</span>
                  <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105"
          >
            Request Custom Proof with Your Artwork
            <ArrowUpRight className="size-4" />
          </Link>
          <p className="mt-2.5 text-xs text-muted-foreground">
            Free digital proof included. Zero die costs or setup fees.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {/* High-res Image Showcase */}
            <div className="relative aspect-square sm:aspect-[4/3] w-full bg-gradient-to-b from-slate-50 to-slate-100 p-8 sm:p-14 flex items-center justify-center">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-4 drop-shadow-[0_20px_35px_rgba(20,38,61,0.2)]"
                priority
              />
            </div>

            {/* Specimen Caption Details */}
            <div className="p-6 bg-[#FAF8F5] border-t border-[#E8E6E0] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {lightboxItem.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Transparent contour cutout • Production specimen
                </p>
              </div>
              <Link
                href="/quote"
                className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all"
              >
                Quote This Style
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
