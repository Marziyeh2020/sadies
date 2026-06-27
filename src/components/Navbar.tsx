"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Sayfa yönlendirmesini yapan ve menüyü kapatan güvenli fonksiyon
  const handleNavigate = (path: string) => {
    setIsOpen(false); // Önce menüyü kapat
    router.push(path); // Sonra sayfaya yönlendir
  };

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999999,
          backgroundColor: "rgba(0,0,0,0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          color: "white",
        }}
      >
        {/* Logo */}
        <div 
          onClick={() => handleNavigate("/")}
          style={{ position: "relative", display: "block", width: "120px", height: "40px", cursor: "pointer" }}
        >
          <Image 
            src="/asset/whitelogo.png" 
            alt="SADIES" 
            fill 
            priority 
            style={{ objectFit: "contain", objectPosition: "left" }} 
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-xs tracking-widest uppercase">
          <span className="cursor-pointer hover:opacity-80" onClick={() => handleNavigate("/")}>Home</span>
          <span className="cursor-pointer hover:opacity-80" onClick={() => handleNavigate("/about")}>About</span>
          <span className="cursor-pointer hover:opacity-80" onClick={() => handleNavigate("/services")}>Services</span>
          <span className="cursor-pointer hover:opacity-80" onClick={() => handleNavigate("/portfolio")}>Portfolio</span>
          <span className="cursor-pointer hover:opacity-80" onClick={() => handleNavigate("/contact")}>Contact</span>
        </div>

        {/* Hamburger Button */}
        <div
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
          className="block md:hidden hamburger-btn"
          style={{
            cursor: "pointer",
            padding: "20px",
            position: "relative",
            zIndex: 100000000,
            display: "block",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <span style={{ display: "block", width: "30px", height: "2px", backgroundColor: "white", marginBottom: "6px" }} />
          <span style={{ display: "block", width: "30px", height: "2px", backgroundColor: "white", marginBottom: "6px" }} />
          <span style={{ display: "block", width: "30px", height: "2px", backgroundColor: "white" }} />
        </div>
      </nav>

      {/* CSS Kuralları */}
      <style>{`
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
        }
        .hamburger-btn:active {
          opacity: 0.3;
        }
      `}</style>

      {/* ===== FULLSCREEN MOBILE MENU OVERLAY ===== */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            zIndex: 99999999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            overflowY: "auto",
          }}
        >
          {/* Close Button */}
          <div
            onClick={() => setIsOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "white",
              fontSize: "36px",
              cursor: "pointer",
              padding: "20px",
              zIndex: 100000000,
              lineHeight: 1,
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            ✕
          </div>

          {/* Menu Links */}
          <div 
            onClick={() => handleNavigate("/")} 
            className="mobile-menu-link" 
            style={{ color: "white", fontSize: "24px", cursor: "pointer", padding: "12px 24px" }}
          >
            Home
          </div>
          <div 
            onClick={() => handleNavigate("/about")} 
            className="mobile-menu-link" 
            style={{ color: "white", fontSize: "24px", cursor: "pointer", padding: "12px 24px" }}
          >
            About
          </div>
          <div 
            onClick={() => handleNavigate("/services")} 
            className="mobile-menu-link" 
            style={{ color: "white", fontSize: "24px", cursor: "pointer", padding: "12px 24px" }}
          >
            Services
          </div>
          <div 
            onClick={() => handleNavigate("/portfolio")} 
            className="mobile-menu-link" 
            style={{ color: "white", fontSize: "24px", cursor: "pointer", padding: "12px 24px" }}
          >
            Portfolio
          </div>
          <div 
            onClick={() => handleNavigate("/contact")} 
            className="mobile-menu-link" 
            style={{ color: "white", fontSize: "24px", cursor: "pointer", padding: "12px 24px" }}
          >
            Contact
          </div>
        </div>
      )}
    </>
  );
}
