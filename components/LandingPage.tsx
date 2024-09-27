'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Key, Star, CheckCircle, Clock, CreditCard, Check } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the search here
    console.log('Searching for:', searchQuery)
  }

  const featuredRooms = [
    { id: 1, title: "Cozy Studio in Downtown", price: 800, location: "Central Location", rating: 4.8, reviews: 120 },
    { id: 2, title: "Spacious Loft near Park", price: 1200, location: "Quiet Neighborhood", rating: 4.6, reviews: 95 },
    { id: 3, title: "Modern Apartment with View", price: 1500, location: "City Center", rating: 4.9, reviews: 150 },
  ]

  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "$9.99",
      description: "Perfect for occasional renters",
      features: [
        "Access to basic search filters",
        "Message up to 5 hosts per month",
        "Basic customer support",
        "View user ratings and reviews",
      ],
    },
    {
      title: "Premium Plan",
      price: "$19.99",
      description: "Ideal for frequent renters",
      features: [
        "Access to all search filters",
        "Unlimited host messaging",
        "Priority customer support",
        "Early access to new listings",
        "Verified renter badge",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "Custom",
      description: "For property managers and large-scale renters",
      features: [
        "All Premium Plan features",
        "Bulk listing management",
        "API access for integration",
        "Dedicated account manager",
        "Custom reporting and analytics",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Key className="h-6 w-6" />
            <span className="text-xl font-bold">RentBro</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/search" className="text-sm font-medium hover:underline">Find Rooms</Link></li>
              <li><Link href="/list-room" className="text-sm font-medium hover:underline">List Your Room</Link></li>
              <li><Link href="/about" className="text-sm font-medium hover:underline">About Us</Link></li>
              <li><Link href="/support" className="text-sm font-medium hover:underline">Support</Link></li>
              <li><Button variant="outline" asChild><Link href="/signin">Sign In</Link></Button></li>
              <li><Button asChild><Link href="/signup">Sign Up</Link></Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Find Your Perfect Room</h1>
            <p className="text-xl mb-8 text-white/80">Discover comfortable and affordable rooms in your desired location</p>
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
              <Search className="text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Enter city or neighborhood" 
                className="flex-grow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">Search Rooms</Button>
            </form>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Search, title: "Easy Search and Filters", description: "Find rooms based on location, price, amenities, and more" },
                { icon: CreditCard, title: "Secure Payments", description: "Make rental payments securely through PayU or Razorpay" },
                { icon: CheckCircle, title: "Verified Listings", description: "All room listings are verified for authenticity using eKYC" },
                { icon: Star, title: "User Reviews and Ratings", description: "Read reviews from previous renters before making a decision" },
                { icon: Clock, title: "24/7 Customer Support", description: "Get help anytime with our round-the-clock support" },
                { icon: Calendar, title: "Flexible Lease Terms", description: "Choose from short-term and long-term rental options" },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRooms.map((room) => (
                <Card key={room.id}>
                  <CardHeader className="p-0">
                    <Image src={`/placeholder.svg?height=200&width=400`} alt={room.title} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{room.title}</CardTitle>
                    <p className="text-muted-foreground">${room.price}/month</p>
                    <div className="flex items-center mt-2">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{room.location}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      <span className="text-sm">{room.rating} ({room.reviews} reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <Badge>Verified</Badge>
                    <Button variant="outline" asChild><Link href={`/room-details/${room.id}`}>View Details</Link></Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild><Link href="/search">View All Rooms</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Search", description: "Enter your desired location and preferences" },
                { step: 2, title: "Connect", description: "Chat with verified hosts and ask questions" },
                { step: 3, title: "Book Securely", description: "Use our secure payment system to book your room" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={index === 1 ? "border-primary" : ""}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                      {index === 2 ? "Contact Sales" : "Choose Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((testimonial) => (
                <Card key={testimonial}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">RentBro made it so easy to find a great room in a new city. The verified listings and secure payments gave me peace of mind. The process was smooth, and I love my new place!</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Room?</h2>
            <p className="text-xl mb-8 text-muted-foreground">Join thousands of happy renters and find your ideal living space today.</p>
            <Button size="lg" asChild><Link href="/signup">Get Started</Link></Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:underline">About Us</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:underline">Careers</Link></li>
                <li><Link href="/press" className="text-sm text-muted-foreground hover:underline">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/support" className="text-sm text-muted-foreground hover:underline">Help Center</Link></li>
                <li><Link href="/safety" className="text-sm text-muted-foreground hover:underline">Safety Information</Link></li>
                <li><Link href="/cancellation" className="text-sm text-muted-foreground hover:underline">Cancellation Options</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-sm text-muted-foreground hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-muted-foreground">&copy; 2023 RentBro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}