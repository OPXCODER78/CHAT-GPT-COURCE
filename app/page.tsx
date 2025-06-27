'use client';

import { useState } from 'react';

export default function Page() {
    const [expandedChapter, setExpandedChapter] = useState(null);

    const toggleChapter = (chapter) => {
        setExpandedChapter(expandedChapter === chapter ? null : chapter);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-red-500">
                        PRAKHAR
                    </div>
                    <div className="text-2xl font-bold text-red-500 ml-2">
                        ACADEMY
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-8 text-sm">
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">HOME</a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">YOUTUBE BLUEPRINT COURSE</a>
                    <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors font-medium">CHATGPT COURSE</a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">TIME MANAGEMENT COURSE</a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">E-BOOKS</a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">AI MASTERCLASS</a>
                </div>
                <button className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-purple-900 transition-all duration-300">
                    Login
                </button>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden px-8 py-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Master{' '}
                            <span className="text-green-400">
                                ChatGPT
                            </span>
                            :
                            <br />
                            Transform Your Life With
                            <br />
                            AI Chatbots
                        </h1>

                        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-red-500/30">
                            <div className="text-red-400 font-bold mb-3 text-lg">NEW 2024 UPDATES:</div>
                            <div className="text-sm space-y-2 text-gray-200">
                                <p>August 2024: Over 2 hours of new lessons added to the course.</p>
                                <p>May 2024: Bonus Workshop presented by Dhruv in 1Billion Summit Dubai is now included in the course</p>
                            </div>
                        </div>

                        <p className="text-gray-200 text-lg leading-relaxed">
                            Artificial Intelligence is changing the world. Learn to use the power of
                            ChatGPT at its full potential to level up your productivity at work,
                            school and at home. Discover the basics of machine learning and prompt
                            engineering.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">8.5 Hours of video content</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">📚</span>
                                </div>
                                <span className="text-white font-medium">8 Chapters</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">🌐</span>
                                </div>
                                <span className="text-white font-medium">Hindi with English Subtitles</span>
                            </div>
                        </div>

                        <button className="w-full lg:w-auto bg-green-500 hover:bg-green-600 px-12 py-4 font-bold text-xl text-white shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 rounded-full">
                            Join Now
                        </button>

                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <div className="font-bold text-2xl">10,000+</div>
                                    <div className="text-sm text-gray-300">Happy Learners on PRAKHAR Academy</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center space-x-1 mb-1">
                                    <span className="font-bold text-xl">4.7★</span>
                                    <span className="text-sm text-gray-300">(1500+ Ratings)</span>
                                </div>
                                <div className="flex space-x-1">
                                    <span className="text-yellow-400">★★★★★</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
                        <div className="relative">
                            {/* Person Image */}
                            <div className="w-96 h-96 relative">
                                <img
                                    src="/api/placeholder/400/500"
                                    alt="Instructor"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            {/* Glowing AI Symbol positioned over the person's hand */}
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-24">
                                <div className="w-full h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-400/50 animate-pulse">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-300 to-teal-300 rounded-full"></div>
                                    </div>
                                </div>
                                {/* Floating particles effect */}
                                <div className="absolute -top-2 -left-2 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
                                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Watch Trailer Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Watch Trailer
                    </h2>
                    <div className="relative bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                        <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 flex items-center justify-center relative">
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 left-[14px] top-[9px]">
                                <button className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl shadow-red-500/50 hover:shadow-red-500/70">
                                    <svg
                                        className="w-8 h-8 text-white ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>

                            <img
                                src="/api/placeholder/800/450"
                                alt="Video thumbnail"
                                className="w-full h-full object-cover opacity-80"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center justify-center space-x-8 mb-4">
                                        <div className="flex items-center space-x-3 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm">📚</span>
                                            </div>
                                            <span className="text-white font-medium">Research</span>
                                        </div>
                                        <div className="flex items-center space-x-3 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm">✍️</span>
                                            </div>
                                            <span className="text-white font-medium">Writing</span>
                                        </div>
                                        <div className="flex items-center space-x-3 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm">📖</span>
                                            </div>
                                            <span className="text-white font-medium">Studying</span>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-white text-center">
                                        Master AI-Powered Productivity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is this Course Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 to-green-600 flex items-center justify-center">
                                <img
                                    src="/api/placeholder/300/300"
                                    alt="Instructor explaining"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12">
                        <h2 className="text-4xl font-bold mb-6">What is this Course?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            This is a groundbreaking course on AI chatbots with a special focus on
                            ChatGPT. I will teach you practical step-by-step techniques to use
                            ChatGPT in your work life, studies and at home along with giving you a
                            deep understanding of the basic concepts of Artificial Intelligence,
                            Machine Learning and Prompt Engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who should Join Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-bold mb-6">Who should Join?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            The course is organised into six distinct chapters. There's one chapter
                            specially designed for school and college students, one for homemakers
                            and general users and one for business owners and employees. If you fall
                            into any of these groups, you will find the course extremely beneficial.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-600 to-purple-600 flex items-center justify-center">
                                <img
                                    src="/api/placeholder/300/300"
                                    alt="Person thinking"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 pr-8">
                        <h2 className="font-bold mb-8 text-[48px]">Course Overview</h2>
                        <div className="space-y-2 mb-8">
                            <div className="flex items-center space-x-4 text-lg">
                                <span className="font-bold">8 Chapters</span>
                                <span className="text-gray-400">9 hours of video content</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {['WELCOME', 'CHAPTER 1', 'CHAPTER 2', 'CHAPTER 3', 'CHAPTER 4'].map(
                                (chapter, index) => (
                                    <div key={index} className="border border-gray-700 rounded-lg">
                                        <button
                                            onClick={() => toggleChapter(index)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800"
                                        >
                                            <span className="font-semibold">{chapter}</span>
                                            <span className="text-2xl">
                                                {expandedChapter === index ? '−' : '+'}
                                            </span>
                                        </button>
                                        {expandedChapter === index && (
                                            <div className="p-4 border-t border-gray-700 bg-gray-900">
                                                <p className="text-gray-300">
                                                    Chapter content details would go here...
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                        <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-8">
                            <div className="mb-6">
                                <img
                                    src="/api/placeholder/400/200"
                                    alt="Course preview"
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Master ChatGPT :</h3>
                            <h4 className="text-xl mb-4">Transform Your Life With AI Chatbots</h4>
                            <p className="text-sm text-gray-300 mb-6">
                                Instructed by Prakhar Vardhan
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Easy payment method</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">✓</span>
                                    <span>9 Hours of Course Content</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Lifetime course access</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Learn anytime, anywhere</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">✓</span>
                                    <span>24/7 instant email support</span>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 py-4 font-semibold text-lg rounded-[36px]">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        What students have said about our courses...
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 - Large */}
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <div className="flex items-center justify-center mb-6">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-green-400">
                                            94%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-400 mb-4">
                                of customers were served successfully
                            </p>
                            <div className="text-green-400 text-4xl mb-4">"</div>
                            <p className="text-gray-300 mb-4">
                                Extremely well structured, and very well presented. I believe the
                                change that I would expect would be the change in the green screen.
                                The BG could've been more simplistic other I really love everything
                                you guys do! Thanks to each and everyone in the team for making it
                                possible!
                            </p>
                            <div className="text-yellow-400 mb-2">ANAMOL S.</div>
                            <div className="flex space-x-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <div className="text-green-400 text-4xl mb-4">"</div>
                            <p className="text-gray-300 mb-4">
                                The lessons were given and organised in a fantastic way. Prakhar has
                                the capacity to maintain the audience's attention. If you would have
                                included how ChatGPT could be utilized for more coding- related
                                subjects, it would be more beneficial to me personally. But I am
                                aware that this course needs to be more inclusive to appeal to all
                                students.
                            </p>
                            <div className="text-yellow-400 mb-2">RHEA A.</div>
                            <div className="flex space-x-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <div className="text-green-400 text-4xl mb-4">"</div>

                            <div className="text-yellow-400 mb-2">PRIYA</div>
                            <div className="flex space-x-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <p className="text-gray-300 mb-4">
                                I Believe conducting the course in Hindi Language was the best part.
                                All the concepts were explained in a very simple easy to understand
                                way. The prompt sheets prepared are also very useful for future use.
                                Looking forward for more such creative courses by Prakhar.
                            </p>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <div className="text-green-400 text-4xl mb-4">"</div>
                            <p className="text-gray-300 mb-4">
                                I am very satisfied with your course. Now I am able to understand AI
                                better than before. You have explained very well how we can use this
                                tool to improve our lives.
                            </p>
                            <div className="text-yellow-400 mb-2">ALI R.</div>
                            <div className="flex space-x-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>

                        {/* Testimonial 5 */}
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                            <div className="text-green-400 text-4xl mb-4">"</div>
                            <p className="text-gray-300 mb-4">
                                AI technology is new for me so it is very good & interesting course.
                                I liked your explanation manner however I liked you also. All
                                chapters are very knowledgeful. You took all points very clearly
                                related to AI
                            </p>
                            <div className="text-yellow-400 mb-2">YOGESH D.</div>
                            <div className="flex space-x-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}