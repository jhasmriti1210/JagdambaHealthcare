import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";
import BrandProducts from "./BrandProducts";

const images = import.meta.glob(
  "../../../assets/products/cardiacsurgery/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);

const image = (path) =>
  images[`../../../assets/products/cardiacsurgery/${path}`];

const products = (brand, folder, list) =>
  list.map(([name, file]) => ({
    name,
    brand,
    image: image(`${folder}/${file}`),
  }));

// Prymax Healthcare and R.K Lifesciences carry the same product range.
const perfusionRange = [
  ["Arterial Cannula", "Arterial Cannula.webp"],
  [
    "Arterial Cannula Pediatric One-Piece",
    "Arterial Cannula Pediatric one - piece.webp",
  ],
  [
    "Arterial Cannula with Wire Reinforced",
    "Arterial cannula with wire Reinforced.webp",
  ],
  ["Arterial Catheter Kit", "Arterial Catheter Kit.webp"],
  ["Arterial Filter", "ARTERIAL FILTER.webp"],
  ["Blunt Needle", "Blunt Needle.webp"],
  ["Cardioplegia Delivery Set", "Cardioplegia Delivery Set.webp"],
  ["Cardioplegia Perfusion Adapters", "Cardioplegia Perfusion Adapters.webp"],
  ["Cautery Accessories", "Cautery Accessories.webp"],
  ["Control Syringe", "Control Syringe.webp"],
  ["Coronary Artery Ostial Cannula", "Coronary Artery Ostial Cannula.webp"],
  ["CVC Kit", "CVC kit.webp"],
  ["Heart Lung Pack", "Heart Lung pack.webp"],
  [
    "Hemostasis Y Push Pull Rotating Click Type",
    "Hemostasis Y Push Pull Rotating Click type.webp",
  ],
  ["High Pressure Line", "High Pressure Line.webp"],
  ["I.V Set", "I.V Set.webp"],
  ["Inflation Device", "Inflation Device.webp"],
  ["Introducer Set", "Introducer Set.webp"],
  ["Introducer Needle", "Introduer needle.webp"],
  ["Manifold", "Manifold.webp"],
  ["Mister Blower", "Mister Blower.webp"],
  ["Pressure Monitoring Kits", "Pressure Monitoring Kits.webp"],
  ["Rigid Suction Tube", "Rigid Suction Tube.webp"],
  ["Venous Cannula", "Venous Cannula.webp"],
  ["Vessel Loops (Silicone Loops)", "Vessel Loops (Silicon Loops).webp"],
];

const cardiacSurgeryItems = [
  ...products("ACE Cathtech", "ACE CATHTECH", [
    ["Arterial Cannula", "Arterial Cannula.png"],
    [
      "Arterial Cannula Pediatric One-Piece",
      "Arterial Cannula Pediatric One-Piece.png",
    ],
    [
      "Arterial Cannula with Wire Reinforced",
      "Arterial Cannula With Wire Reinforced.png",
    ],
    ["Arterial Catheter Kit", "Arterial Catheter Kit.png"],
    ["Arterial Filter", "Arterial Filter.png"],
    ["Cardioplegia Delivery Set", "Cardioplegia Delivery Set.jpg"],
    ["Cardioplegia Perfusion Adapters", "Cardioplegia Perfusion Adapters.png"],
    ["Components of Standard CVC Kit", "Components of Standard CVC Kit.png"],
    ["Control Syringe", "Control Syringe.png"],
    ["Coronary Artery Ostial Cannula", "Coronary Artery Ostial Cannula.png"],
    ["CVC Kit", "CVC Kit.png"],
    ["Filter-1-300x300", "Filter-1-300x300.png"],

    ["Heart Lung Pack", "Heart Lung Pack.png"],
    ["High Pressure Line", "High Pressure Line.png"],
    ["Inflation Device", "Inflation Device.png"],
    ["Introducer Needle", "Introducer Needle.png"],
    ["Manifold", "Manifold.png"],
    ["Mister Blower", "Mister Blower.png"],
    ["Perfusion Accessories", "Perfusion Accessories.png"],
    ["Rigid Suction Tubes", "Rigid Suction Tubes.png"],
    ["Venous Cannula", "Venous Cannula.png"],
    ["Venous Cannula Angled Metal Tip", "Venous Cannula Angled Metal Tip.png"],
    ["Y-Connector", "Y-Connector.png"],
  ]),
  ...products("Corcym", "CORCYM", [
    ["Carbo-Seal Valsalva™ (Aortic)", "Aortic/CARBO-SEAL VALSALVATM.webp"],
    ["Carbomedics™ Aortic Valve", "Aortic/CARBOMEDICSTM.webp"],
    ["HAART 200™ (Aortic)", "Aortic/HAART 200TM.webp"],
    ["HAART 300™ (Aortic)", "Aortic/HAART 300TM.webp"],
    ["Perceval Plus (Aortic)", "Aortic/perceval_PLUS_LANCELOT.webp"],
    [
      "Annuloflex™ (Mitral & Tricuspid)",
      "MITRAL & TRICUSPID/ANNULOFLEXTM.webp",
    ],
    ["Carbomedics™ Mitral Valve", "MITRAL & TRICUSPID/CARBOMEDICSTM.webp"],
    ["Memo 3D™ (Mitral)", "MITRAL & TRICUSPID/MEMO 3DTM.webp"],
    ["Memo 4D™ (Mitral)", "MITRAL & TRICUSPID/MEMO 4D TM.webp"],
    ["Memo 4D Curve™ (Mitral)", "MITRAL & TRICUSPID/MEMO 4D CURVETM.webp"],
    ["TriMemo™ (Tricuspid)", "MITRAL & TRICUSPID/TRIMEMO ⌐.webp"],
  ]),
  ...products("Getinge Maquet", "MAQUET", [
    ["Acrobat-i Positioner", "Acrobat-i Positioner (GETTINGE MAQUET).jpg"],
    ["Acrobat-i Stabilizer", "acrobat -i stabilizer (GETTINGE MAQUET).jpg"],
    [
      "Acrobat SUV Vacuum Stabilizer",
      "acrobat suv vacuum stabilizer (GETTINGE MAQUET).jpg",
    ],
    [
      "Cardioroot (Woven Vascular Graft)",
      "Cardioroot(woven vascular graft ) gettinge maquet.jpg",
    ],
    ["HLS Cannulae", "Hls cannulae (Gettinge maquet).jpg"],
    ["HLS Set Advanced", "HLS Set advanced (Gettinge maquet).jpg"],
    [
      "Intergard Knitted Trifurcated & Quadrifurcated",
      "intergard knitted trifurcated and quadrifurcated (GETTINGE MAQUET).jpg",
    ],
    [
      "Intergard Knitted Ultrathin",
      "Intergard Knitted Ultrathin (GETTINGE MAQUET).jpg",
    ],
    [
      "Intergard Knitted Vascular Graft",
      "intergard knitted vascular graft (GETTINGE MAQUET).jpg",
    ],
    [
      "Intergard Silver (Antimicrobial Graft)",
      "intergard silver (antimicrobial graft) (GETTINGE MAQUET).jpg",
    ],
    ["Intergard Synergy", "intergard synergy (GETTINGE MAQUET).jpg"],
    [
      "Intergard Woven Aortic Arch & Hemabridge",
      "Intergard Woven Aortic Arch and Hemabridge (GETTINGE MAQUET).jpg",
    ],
    [
      "Intergard Woven Thoracic Aortic Graft",
      "Intergard Woven Thoracic Aortic Graft (GETTINGE MAQUET).jpg",
    ],
    [
      "Linear 7.5 Fr. IAB Catheter",
      "Linear 7.5 Fr. IAB Catheter (GETTINGE MAQUET).jpg",
    ],
    [
      "Mega 7.5 Fr. & 8 Fr. IABP Catheters",
      "Mega 7.5 Fr. & 8 Fr. IABP Catheters (GETTINGE MAQUET).jpg",
    ],
    ["PLS Kit", "Pls kit (GETTINGE MAQUET).jpg"],
    ["Rotaflow II System", "rotaflow II system (GETTINGE MAQUET).jpg"],
    [
      "Sensation 7 Fr. IAB Catheter",
      "Sensation 7 Fr. IAB Catheter (GETTINGE MAQUET).jpg",
    ],
    [
      "Sensation Plus 7.5 Fr. & 8 Fr. IAB Catheters",
      "Sensation Plus 7.5 Fr. & 8 Fr. IAB Catheters (GETTINGE MAQUET).jpg",
    ],
  ]),
  ...products("Prymax Healthcare", "PRYMAX HEALTHCARE", perfusionRange),
  ...products("R.K Lifesciences", "R.K LIFESCIENCES", perfusionRange),
  ...products("Sorin Medical", "SORIN MEDICAL", [
    [
      "Cannula (Bi-Flow, Pureflex & More)",
      "CANNULA (INCLUDING BI-FLOW, PUREFLEX AND MORE ).webp",
    ],
    [
      "Disposables (PTS, Connectors & More)",
      "Disposables (INCLUDING PTS, CONNECTORS AND MORE).webp",
    ],
    ["Heart-Lung Equipment", "Heart-Lung Equipment.webp"],
    [
      "Oxygenators (Inspire Family, Kids & Lilliput)",
      "Oxygenators (INSPIRE FAMILY , KIDS AND LILLIPUT).webp",
    ],
    ["Vascular Dilator Kit", "Vascular Dilator Kit .png"],
  ]),
  ...products("TTK Healthcare", "TTK HEALTHCARE", [
    ["TTK Chitra Heart Valve", "TTK Chitra Heart Valve.jpeg"],
    ["TTK Chitra Mitral Valve", "TTK Chitra Mitral Valve.jpeg"],
  ]),
];

export default function CardiacSurgery() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      {/* Hero */}
      <section
        className="relative min-h-[420px] h-[50vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/65" />

        <motion.div
          className="relative z-10 w-full max-w-5xl px-5 sm:px-6 text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-[#10B981] mt-6"
          >
            — Cardiac Surgery —
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white"
          >
            Cardiac Surgery Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-base sm:text-lg md:text-2xl leading-relaxed text-white/90"
          >
            Advanced cardiac surgery solutions and reliable surgical support
            systems for modern healthcare institutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-[#E5E7EB] bg-[#F8FAFC] py-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center text-sm sm:text-base text-[#4B5563]">
            <Link
              to="/products"
              className="font-semibold text-[#047857] transition hover:text-[#10B981]"
            >
              Products
            </Link>

            <span className="mx-2 text-[#9CA3AF]">/</span>

            <span className="font-medium text-[#111827]">Cardiac Surgery</span>
          </div>
        </div>
      </section>

      <BrandProducts items={cardiacSurgeryItems} />

      <Footer />
    </div>
  );
}
