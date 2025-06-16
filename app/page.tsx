'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Code, Smartphone, Globe, Users, Award, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Веб-разработка",
      description: "Создаем современные веб-приложения с использованием передовых технологий"
    },
    {
      icon: Smartphone,
      title: "Мобильные приложения",
      description: "Разрабатываем нативные и кроссплатформенные мобильные решения"
    },
    {
      icon: Globe,
      title: "Корпоративные системы",
      description: "Проектируем и внедряем комплексные IT-решения для бизнеса"
    }
  ];

  const stats = [
    { number: "15+", label: "Проектов завершено" },
    { number: "3", label: "Год опыта" },
    { number: "24/7", label: "Поддержка" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Image src={`logo.svg`} alt='logo' width={70} height={70}/>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Главная</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Услуги</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">О нас</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Контакты</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-40 animate-ping"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="text-blue-600">Rufus</span>
            <br />
            IT Разработка
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Превращаем ваши идеи в инновационные IT-решения. 
            Профессиональная разработка для современного бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Начать проект
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Узнать больше
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-600" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Наши <span className="text-blue-600">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр IT-услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Подробнее</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                О компании <span className="text-blue-600">Rufus</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Мы команда профессиональных разработчиков, которая создает 
                инновационные IT-решения для бизнеса любого масштаба.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наш опыт и экспертиза позволяют нам решать самые сложные технические 
                задачи, обеспечивая высокое качество и соблюдение сроков.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Users className="text-blue-600 mr-2" size={24} />
                  <span className="text-gray-700">Опытная команда</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-blue-600 mr-2" size={24} />
                  <span className="text-gray-700">Высокое качество</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Почему выбирают нас?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Индивидуальный подход к каждому проекту
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Использование современных технологий
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Гарантия качества и поддержка
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Соблюдение сроков и бюджета
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Готовы начать <span className="text-blue-600">проект?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и мы обсудим, как превратить ваши идеи в реальность
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                <p className="text-blue-600">it.rufus@mail.ru</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Телефон</h4>
                <p className="text-blue-600">+7 (999) 799-93-49</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Офис</h4>
                <p className="text-gray-600">Ярославль, Россия</p>
              </div>
            </div>
            <Link href={'https://t.me/sazeleam'}>
              <button className="bg-blue-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Связаться с нами
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-4">Rufus</div>
            <p className="text-gray-400 mb-6">
              Профессиональная IT-разработка для вашего успеха
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2025 Rufus. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}