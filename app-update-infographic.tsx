"use client"

import { useState, useEffect } from "react"
import {
  Smartphone,
  Bug,
  Palette,
  Navigation,
  ShoppingCart,
  Layout,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const [animationStep, setAnimationStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const updates = [
    {
      title: "Icons Redesign",
      description: "Fresh new icon set with modern design language",
      icon: Palette,
      color: "bg-purple-500",
      delay: 0,
    },
    {
      title: "AppBar Navigation Fix",
      description: "Resolved navigation bugs for smoother user experience",
      icon: Navigation,
      color: "bg-blue-500",
      delay: 200,
    },
    {
      title: "Campaigns List UI",
      description: "Enhanced campaigns screen with improved layout",
      icon: Layout,
      color: "bg-green-500",
      delay: 400,
    },
    {
      title: "Categories AppBar",
      description: "Optimized product categories navigation bar",
      icon: BookOpen,
      color: "bg-orange-500",
      delay: 600,
    },
    {
      title: "Cart Overflow Fix",
      description: "Fixed cart display issues in categories section",
      icon: ShoppingCart,
      color: "bg-red-500",
      delay: 800,
    },
    {
      title: "Product Screen Polish",
      description: "Multiple bug fixes and UI improvements",
      icon: Bug,
      color: "bg-indigo-500",
      delay: 1000,
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStep < updates.length) {
        setAnimationStep(animationStep + 1)
        setProgress(((animationStep + 1) / updates.length) * 100)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [animationStep, updates.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Smartphone className="w-12 h-12 text-blue-600" />
              <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BD Books App Update
            </h1>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-600 mb-2">Latest improvements and bug fixes</p>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm text-gray-500">
                Developed by <span className="font-semibold text-blue-600">Abu Sufian</span>
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-purple-600">BIntel Future Tech</span>
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Update Progress</span>
              <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{updates.length}</div>
                <div className="text-sm text-gray-600">Updates</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Bug className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">5+</div>
                <div className="text-sm text-gray-600">Bugs Fixed</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">User Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {updates.map((update, index) => {
            const Icon = update.icon
            const isVisible = index < animationStep

            return (
              <Card
                key={index}
                className={`border-0 shadow-xl bg-white/90 backdrop-blur-sm transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{
                  transitionDelay: `${update.delay}ms`,
                  animationDelay: `${update.delay}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${update.color} p-3 rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{update.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{update.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline Section */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Update Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

              {updates.map((update, index) => {
                const Icon = update.icon
                const isVisible = index < animationStep

                return (
                  <div
                    key={index}
                    className={`relative flex items-center mb-8 transition-all duration-500 ${
                      isVisible ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8 order-2"}`}>
                      <div className="bg-white p-4 rounded-lg shadow-md border">
                        <h4 className="font-semibold text-gray-800">{update.title}</h4>
                        <p className="text-sm text-gray-600">{update.description}</p>
                      </div>
                    </div>

                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 ${update.color} p-2 rounded-full shadow-lg z-10 ${
                        isVisible ? "scale-100" : "scale-75"
                      } transition-transform duration-300`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Updates?</h3>
              <p className="mb-6 opacity-90">Download the latest version of BD Books app now!</p>
              <div className="flex items-center justify-center gap-2 text-lg font-semibold mb-4">
                <Calendar className="w-5 h-5" />
                <span>Version 2.1.0 - January 2025</span>
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
              <div className="border-t border-white/20 pt-4 mt-4">
                <p className="text-sm opacity-80">
                  Developed by <span className="font-semibold">Abu Sufian</span>
                </p>
                <p className="text-sm opacity-80">
                  <span className="font-semibold">BIntel Future Tech</span> © 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
