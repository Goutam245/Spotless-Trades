import beforeAfterImg from "@/assets/before-after.jpg";

const BeforeAfter = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-3">
          See The Difference
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Real results from recent Melbourne bathroom renovations.
        </p>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img
            src={beforeAfterImg}
            alt="Before and after bathroom renovation by Spotless Trades"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
