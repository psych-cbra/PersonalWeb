export const Hero = () => {
  return (
  <section className="relative min-h-screen flex items-center overflow-hidden">

  {/*Background purple dots*/}
  <div className="absolute inset-0">
    <img src="/Pictures/purple-hero.png" alt="Hero Image" className="w-full h-full object-cover opacity-40"/>
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black from-background/20 via-background/80 to-background/100"> /* Overlay */
  </div>
  {/*Content, loop through an array of 40 values, slow-dirft is an component created in the index.css*/}
  <div>
    {[...Array(40)].map((_, i) => (
      <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
      style={{ 
        backgroundColor: "#a224ec",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slow-drift ${15 + Math.random() * 5          
        }s ease-in-out infinite `,
        animationDelay: `${Math.random() * 5}s`,
        }}
        />
    ))}
  </div>
 </section>
  );
};