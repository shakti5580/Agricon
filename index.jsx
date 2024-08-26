/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ixHa4xtThf5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <LeafIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Agricon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Register(farmer)
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                    Connecting Farmers Directly to Retailers and Consumers
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Agricon is revolutionizing the way farmers, retailers, and consumers interact. Our platform enables
                    direct connections, ensuring fresh produce, fair prices, and sustainable practices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Agricon Advantage</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agricon's platform connects farmers directly with retailers and consumers, ensuring fresh produce,
                  fair prices, and sustainable practices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Fresh Produce</h3>
                      <p className="text-muted-foreground">
                        Enjoy the freshest fruits and vegetables, directly sourced from local farmers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Fair Prices</h3>
                      <p className="text-muted-foreground">
                        Eliminate middlemen and enjoy fair, transparent pricing for both farmers and consumers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Sustainable Practices</h3>
                      <p className="text-muted-foreground">
                        Support local agriculture and reduce your carbon footprint with Agricon's sustainable model.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Benefits for Farmers, Retailers, and Consumers
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Agricon's platform creates a win-win-win scenario for all stakeholders, ensuring fresh produce, fair
                prices, and sustainable practices.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet the Agricon Team</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our passionate team is dedicated to revolutionizing the agricultural industry and creating a more
                sustainable future.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Team Member"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="font-medium">John Doe</h4>
                  <p className="text-sm text-muted-foreground">Co-Founder</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Team Member"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="font-medium">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Team Member"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="font-medium">Michael Johnson</h4>
                  <p className="text-sm text-muted-foreground">Head of Operations</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Team Member"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="text-center">
                  <h4 className="font-medium">Emily Davis</h4>
                  <p className="text-sm text-muted-foreground">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  What Our Customers Say
                </h2>
                <div className="grid gap-4">
                  <div className="rounded-md border p-4 shadow-sm">
                    <p className="text-muted-foreground">
                      "Agricon has been a game-changer for my small farm. The direct connection to consumers has\n
                      allowed\n me to sell my produce at fair prices and reduce food waste."
                    </p>
                    <div className="mt-4 flex items-center">
                      <img
                        src="/placeholder.svg"
                        width="40"
                        height="40"
                        alt="Customer"
                        className="rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div className="ml-3">
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">Organic Farmer</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4 shadow-sm">
                    <p className="text-muted-foreground">
                      "As a small business owner, Agricon has been a lifesaver. I can now source high-quality
                      produce\n\n directly from local farmers, which has improved my product quality and customer
                      satisfaction."
                    </p>
                    <div className="mt-4 flex items-center">
                      <img
                        src="/placeholder.svg"
                        width="40"
                        height="40"
                        alt="Customer"
                        className="rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div className="ml-3">
                        <h4 className="font-medium">Michael Lee</h4>
                        <p className="text-sm text-muted-foreground">Cafe Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get Started</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Join the Agricon community and start enjoying the benefits of fresh, locally-sourced produce. Sign up
                  today to become a farmer, retailer, or consumer.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Agricon. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Register
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}
