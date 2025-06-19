'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Battery, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">MONOPA</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                E-Scooters
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Technology
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/a317c5db-07b2-41c2-9e35-ed22c7bb4b1f.jpg?"
                                    alt="MONOPA Elite Electric Scooter - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/0b6c3f6a-c3d1-4824-8dea-55f5b42b8977.jpg?", alt: "MONOPA Elite side view" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/90511e8e-8bc1-4e24-98d4-9e4f7f6de0a4.jpg?", alt: "MONOPA Elite handlebar details" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/ee70322f-1060-4f6d-af0d-3697b909e496.jpg?", alt: "MONOPA Elite wheel close-up" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/71c01ae8-98f9-46cd-b4c7-709216f4bd69.jpg?", alt: "MONOPA Elite folded view" },
                                ].map((image, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium">
                                    🚀 Next Generation
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    MONOPA Elite Electric Scooter
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(1,847 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Experience premium urban mobility with industry-leading 60km range and innovative 15% energy recovery system. The perfect fusion of performance, sustainability, and style.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$899</span>
                                    <span className="text-xl text-slate-500 line-through">$1,199</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        25% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 48 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Battery, text: "60km Range" },
                                    { icon: Zap, text: "15% Energy Recovery" },
                                    { icon: Gauge, text: "25 km/h Max" },
                                    { icon: Shield, text: "Aircraft-grade Build" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                                    >
                                        <feature.icon className="h-5 w-5 text-slate-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        Transform Your Commute - $899
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Experience Test Ride
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Delivery</p>
                                        <p className="text-xs text-slate-500">White glove service</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Trial</p>
                                        <p className="text-xs text-slate-500">Risk-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-slate-500">Full coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose MONOPA Elite?</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Industry-Leading Range",
                                                    description: "60km maximum range on a single charge, perfect for extended urban adventures",
                                                },
                                                {
                                                    title: "Smart Energy Recovery",
                                                    description: "15% energy regeneration system extends battery life during braking",
                                                },
                                                {
                                                    title: "Premium Build Quality",
                                                    description: "Aircraft-grade materials ensure durability and reliability for years",
                                                },
                                                {
                                                    title: "Intelligent Control",
                                                    description: "3-speed settings with max 25 km/h for optimal control in any environment",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/90511e8e-8bc1-4e24-98d4-9e4f7f6de0a4.jpg?"
                                            alt="MONOPA Elite features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Range", value: "60km maximum" },
                                                { label: "Battery", value: "477.36Wh Lithium" },
                                                { label: "Energy Recovery", value: "15% regeneration" },
                                                { label: "Max Speed", value: "25 km/h" },
                                                { label: "Speed Modes", value: "3 settings" },
                                                { label: "Frame Material", value: "Aircraft-grade aluminum" },
                                                { label: "Weight", value: "15.5 kg" },
                                                { label: "Max Load", value: "120 kg" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x MONOPA Elite Electric Scooter",
                                                "1x Smart Charger with BMS",
                                                "1x User Manual & Quick Start Guide",
                                                "1x Tool Kit",
                                                "1x Extended Warranty Card",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 1,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "1,570" : stars === 4 ? "185" : "92"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Alex Thompson",
                                                avatar: "AT",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for my commute!",
                                                content:
                                                    "The 60km range is real - I charge it twice a week for my daily commute. The energy recovery system is brilliant!",
                                            },
                                            {
                                                name: "Maria Garcia",
                                                avatar: "MG",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Premium quality worth every penny",
                                                content:
                                                    "Build quality is exceptional. The matte black finish looks stunning and the ride is incredibly smooth.",
                                            },
                                            {
                                                name: "James Liu",
                                                avatar: "JL",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Sustainable and practical",
                                                content:
                                                    "Love the eco-friendly aspect. The 3-speed control is perfect for navigating different urban environments.",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How long does the battery last?",
                                                answer:
                                                    "The MONOPA Elite offers up to 60km range on a single charge. With the 15% energy recovery system, you can extend this even further during regular use.",
                                            },
                                            {
                                                question: "Is it suitable for daily commuting?",
                                                answer:
                                                    "Absolutely! It's designed specifically for urban commuters. The 60km range covers most daily commutes with charge to spare.",
                                            },
                                            {
                                                question: "What's the charging time?",
                                                answer:
                                                    "Full charge takes approximately 4-5 hours with the included smart charger. The BMS ensures safe and efficient charging.",
                                            },
                                            {
                                                question: "Can it handle hills and inclines?",
                                                answer:
                                                    "Yes, the powerful motor handles inclines up to 15% grade with ease, making it perfect for varied urban terrain.",
                                            },
                                            {
                                                question: "What maintenance is required?",
                                                answer:
                                                    "Minimal maintenance needed - just regular tire pressure checks and occasional cleaning. The sealed components are weather-resistant.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
                            Complete Your Urban Setup
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { name: "Smart Helmet", price: "$89", image: "Safety helmet for MONOPA Elite" },
                                { name: "Phone Mount", price: "$29", image: "Universal phone mount for scooter" },
                                { name: "Storage Bag", price: "$49", image: "Waterproof storage bag" },
                                { name: "LED Light Set", price: "$39", image: "Extra LED safety lights" },
                            ].map((product, i) => (
                                <Card
                                    key={i}
                                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                            <Image
                                                src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/71c01ae8-98f9-46cd-b4c7-709216f4bd69.jpg?"
                                                alt={product.image}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">{product.name}</h3>
                                        <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">MONOPA</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 MONOPA. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}