import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - Minimal Clean */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
              Simple.<br />
              <span className="text-orange-500">Wholesale.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Electronics distribution without the complexity.
              Quality products. Fair prices. Fast delivery.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                View Products
              </Link>
              <Link href="/contact" className="px-8 py-4 text-gray-900 font-medium hover:text-orange-500 transition-colors">
                Contact →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Stats */}
      <section className="border-t border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-gray-900">2,600</div>
              <div className="text-sm text-gray-400 mt-1">Products</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900">450</div>
              <div className="text-sm text-gray-400 mt-1">Clients</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900">7</div>
              <div className="text-sm text-gray-400 mt-1">Years</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900">24h</div>
              <div className="text-sm text-gray-400 mt-1">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Minimal Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-gray-900 mb-12">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100">
            {[
              { name: "Audio", count: "680" },
              { name: "Power", count: "420" },
              { name: "Wearables", count: "310" },
              { name: "Accessories", count: "590" },
              { name: "Cables", count: "380" },
              { name: "Cases", count: "220" },
            ].map((c, i) => (
              <Link key={i} href="/products" className="bg-white p-8 hover:bg-gray-50 transition-colors group">
                <div className="text-sm text-gray-400 mb-1">{c.count} items</div>
                <div className="text-xl text-gray-900 group-hover:text-orange-500 transition-colors">{c.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Minimal List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-light text-gray-900 mb-12">Why Wizebay</h2>
          <div className="space-y-8">
            {[
              { title: "Pay on delivery", desc: "No upfront payment required. Inspect before you pay." },
              { title: "24-48h shipping", desc: "Fast delivery across Europe from our Belgian warehouse." },
              { title: "Volume pricing", desc: "Better prices as your orders grow. Simple and transparent." },
              { title: "Quality assured", desc: "Every product checked before shipping. Guaranteed." },
            ].map((f, i) => (
              <div key={i} className="flex gap-8 items-start border-b border-gray-200 pb-8">
                <div className="text-4xl font-light text-gray-300">0{i + 1}</div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Ready to start?</h2>
          <p className="text-gray-500 mb-10">
            No minimum order for new customers.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
            Get in Touch
          </Link>
          <p className="text-gray-400 text-sm mt-8">
            info@wizebay.com
          </p>
        </div>
      </section>
    </div>
  );
}
