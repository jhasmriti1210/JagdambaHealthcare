export default function PartnersSection() {
  const partners = [
    {
      name: "Edwards Lifesciences",
      logo: "/partners/edwards.png",
    },
    {
      name: "Magnet Medical",
      logo: "/partners/magnet.png",
    },
    {
      name: "Kai Medical",
      logo: "/partners/kai.png",
    },
    {
      name: "Dhanam",
      logo: "/partners/dhanam.png",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium text-black">
            — Our Partners —
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold text-[#005B99] leading-tight">
            Collaborating with Global Leaders in MedTech
          </h2>
        </div>

        {/* Logos */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 md:max-h-28 object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
