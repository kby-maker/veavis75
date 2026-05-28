/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Globe, Shield, X, HelpCircle } from "lucide-react";
import { LanguageContent } from "../types";

interface FooterProps {
  isKo: boolean;
  content: LanguageContent;
  scrollToSection: (id: string) => void;
}

export default function Footer({ isKo, content, scrollToSection }: FooterProps) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer id="footer_main" className="bg-slate-50 border-t border-slate-200/60 py-16 relative overflow-hidden">
      
      {/* Decorative Blur and Grid */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-blue-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              id="footer_logo_btn"
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 group focus:outline-none text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-extrabold text-sm tracking-tighter">KO</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                KOCOM <span className="font-sans font-light text-blue-600">Smart</span>
              </span>
            </button>

            <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal max-w-sm">
              {content.footer.desc}
            </p>

            <div className="flex items-center space-x-2 text-xs text-slate-400 font-sans">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Domain: www.kocom.co.kr</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <span className="text-2xs font-bold text-slate-400 tracking-wider uppercase block">
                Navigation
              </span>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="font-sans text-xs text-slate-600 hover:text-slate-900 cursor-pointer transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="font-sans text-xs text-slate-600 hover:text-slate-900 cursor-pointer transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("solutions")}
                    className="font-sans text-xs text-slate-600 hover:text-slate-900 cursor-pointer transition"
                  >
                    Solutions
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-2xs font-bold text-slate-400 tracking-wider uppercase block">
                Contact & Support
              </span>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="font-sans text-xs text-slate-600 hover:text-slate-900 cursor-pointer transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="font-sans text-xs text-slate-600 hover:text-slate-900 cursor-pointer transition"
                  >
                    Contact Info
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="font-sans text-xs text-blue-600 hover:underline cursor-pointer transition flex items-center space-x-1"
                  >
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                    <span>Privacy Policy</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Location Badge (3 cols) */}
          <div className="md:col-span-3 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-202/30 space-y-3">
            <span className="text-[10px] font-sans font-bold text-slate-450 uppercase tracking-wide block">
              REPUBLIC OF KOREA
            </span>
            <div className="font-sans text-[11px] text-slate-600 leading-relaxed font-semibold">
              경기도 부천시 원미구 신흥로 225 (주식회사 코콤)<br />
              사업자등록번호: 130-81-19760<br />
              대표이사: 고성욱
            </div>
            <div className="w-full h-px bg-slate-100" />
            <span className="text-3xs font-sans text-slate-400 block">
              KOCOM CO., LTD. &copy;
            </span>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="font-sans font-semibold text-center md:text-left text-slate-500">
            {content.footer.rights}
          </p>
          <div className="flex items-center space-x-4">
            <span className="font-sans font-semibold text-slate-400">UTC: 2026-05-28</span>
            <span className="h-3 w-px bg-slate-200" />
            <span className="font-sans font-bold text-slate-550">kocom.co.kr</span>
          </div>
        </div>
      </div>

      {/* Interactive Privacy Policy Modal Overlay */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-slate-200/60 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                Legal Document
              </span>
              <h3 className="font-display font-extrabold text-xl text-slate-900">
                Privacy Policy & Terms
              </h3>
            </div>

            <div className="font-sans text-xs text-slate-500 leading-relaxed space-y-4">
              <p className="font-bold text-slate-700">
                1. 수집하는 개인정보 항목 (Information We Collect)
              </p>
              <p>
                주식회사 코콤 홈페이지는 이용자의 제품 문의 및 견적 상담 신청 대응을 위해 다음과 같은 최소한의 개인정보를 수집하고 저장합니다: 이름, 이메일 주소, 현장명 또는 단지명, 및 문의 상세 내용.
              </p>

              <p className="font-bold text-slate-700">
                2. 개인정보의 수집 및 이용 목적 (Purpose of Usage)
              </p>
              <p>
                수집된 정보는 오직 1:1 스마트홈 자재 견적 산출, 제품 업그레이드 방문 상담 등 고객 요청에 응대하는 목적 외에는 절대 타 용도로 사용되지 않으며, 외부에 이관되지 않습니다.
              </p>

              <p className="font-bold text-slate-700">
                3. 보존 및 파기 정책 (Retention Period)
              </p>
              <p>
                본 문의 데스크를 통해 수집된 고객 개인정보는 관련 상담 및 사후 조치 완료 후 최대 90일 이후 혹은 법정 보존 의무 기간 이후 지체 없이 즉각 파기함을 원칙으로 합니다.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs cursor-pointer"
              >
                Accept and Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
