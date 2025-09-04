"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 lg:py-20 gap-10 bg-gray-50">
        {/* Loading skeleton */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
        </div>
      </section>
    );
  }

  return (
    <section className={`flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 lg:pb-70 lg:pt-30 gap-10 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>

      
      {/* Avatar */}
      <div className="flex-shrink-0 2xl:ml-50">

        <Image
          src="/assets/avatar.png"
          alt="Jurandir Oliveira"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
          priority
        /></div>


      {/* Texto */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
        }`}>
          Olá, bem vindo!
        </h1>
        <p className={`mb-4 leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Sou Jurandir Oliveira, Desenvolvedor Front-End, Designer e Ilustrador com mais de{" "}
          <strong>25 anos de experiência</strong> em tecnologia e design — e nos últimos anos, especializado no
          desenvolvimento de aplicações web e mobile com React, React Native, Angular e Flutter.
        </p>
        <p className={`mb-6 leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Minha missão é criar interfaces rápidas, intuitivas e acessíveis,
          unindo performance, usabilidade e design para gerar resultados reais
          para produtos e usuários.
        </p>
        <p> Navegue nos links acima e conheça um pouco do meu portfólio.</p>
        {/* <Link
          href="/portfolio/dev"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          🔗 Explore meu portfólio
        </Link> */}
      </div>
    </section>
  );
}