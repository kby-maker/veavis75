/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageContent, NavLink } from "./types";

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Business Area" },
  { id: "solutions", label: "Solutions" },
  { id: "about", label: "About KOCOM" },
  { id: "contact", label: "Inquiry" },
];

export const KoreanNavLinks = [
  { id: "home", label: "홈" },
  { id: "services", label: "사업 영역" },
  { id: "solutions", label: "맞춤 솔루션" },
  { id: "about", label: "코콤 소개" },
  { id: "contact", label: "고객 문의" },
];

export const contentKO: LanguageContent = {
  header: {
    cta: "온라인 제품 문의",
  },
  hero: {
    headline: "Smart Space, Happy Life\n스마트한 세상을 디자인하는 코콤",
    subheadline: "코콤(KOCOM)은 차별화된 IoT 네트워크 월패드, 고해상도 CCTV 안심 보안, 그리고 친환경 고효율 스마트 LED 홈 조명 시스템으로 한 차원 앞선 디지털 리빙 생태계를 완성합니다.",
    ctaPrimary: "제품 및 구축 문의",
    ctaSecondary: "핵심 제품 라인업",
    trustText: "스마트홈 IoT 월패드 · 스마트 빌딩 공동 로비폰 · 지능형 CCTV 감시 · 친환경 LED 조명 및 시스템",
  },
  problem: {
    title: "현대의 주거 및 상업 빌딩이 겪는 스마트 과제",
    description: "새로 짓는 신축 아파트 단지부터 리모델링이 시급한 노후 빌딩까지, 스마트 라이프 인프라 구축의 핵심 난제를 코콤의 40년 정보통신 원천 특허를 통해 가장 영리하고 빠르게 혁신합니다.",
    cards: [
      {
        icon: "Layers",
        title: "복잡한 홈 IoT 호환성과 연동 규격",
        solution: "코콤 오픈 IoT 허브 연동",
        description: "다채로운 브랜드 가전사, 난방기, 환기 스펙, 스마트 장비들과 완벽하게 연동되는 세대 내 통합 월패드와 스마트홈 앱 플랫폼을 완비했습니다.",
      },
      {
        icon: "Lightbulb",
        title: "갈수록 교묘해지는 주거지 침입 위협",
        solution: "지능형 종합 방범 네트워크",
        description: "고화질 세대 현관 카메라, 스마트 도어락, 고정밀 복도 감지 센서를 일괄 연동하여 사각지대 없는 300% 밀착형 주거 보안 시스템을 유지합니다.",
      },
      {
        icon: "TrendingUp",
        title: "건물 에너지 효율 관리의 어려움",
        solution: "스마트 조명 융합 관리",
        description: "실시간 조도 전원 제어, 디밍 제어를 결합한 스마트 인텔리전트 LED 조명과 지능형 전력 분배기를 적용하여 세대별, 단지 주차장 에너지를 대폭 감축합니다.",
      },
    ],
  },
  services: {
    title: "코콤의 6대 핵심 사업 영역",
    subtitle: "고품격 디자인의 IoT 월패드부터 산업용 종합 네트워크 감시 CCTV, 친환경 조명 솔루션까지 스마트 주거 안전의 전 분야를 선도합니다.",
    cards: [
      {
        icon: "Globe",
        title: "스마트홈 & 홈 IoT 월패드",
        description: "언제 어디서든 스마트폰 앱 하나로 난방, 도어락, 조명, 가스밸브를 한눈에 모니터링하고 원격 제어하는 프리미엄 터치 디스플레이 월패드 제품군입니다.",
        details: ["고성능 풀터치 슬림 베젤 디자인", "스마트폰 앱(App) 동시 원격 케어", "가전 협력사 제품 연계 호환 기능"],
        colorClass: "from-blue-500/10 to-cyan-500/10 border-blue-100",
      },
      {
        icon: "Cpu",
        title: "스마트 빌딩 & 공동 현관 로비폰",
        description: "아파트 및 오피스 단지 주출입 차량 번호인식기, 고품격 공동현관 로비폰, 경비실 통합 마스터 제반 장비를 완벽한 일괄 네트워크로 결속합니다.",
        details: ["정적 암호화 공동현관 비밀번호망", "경비실 마스터 다자간 원거리 대화", "고휘도 주차 통제 실시간 감시 시스템"],
        colorClass: "from-violet-500/10 to-fuchsia-500/10 border-violet-100",
      },
      {
        icon: "BookOpen",
        title: "고해상도 CCTV & 영상 감시",
        description: "지능형 침입 탐지 알고리즘이 적용된 고해상도 IP 카메라와 대대적인 데이터를 저장하는 고성능 NVR/DVR 영상 저장 시스템을 통해 공동체의 안전을 수호합니다.",
        details: ["UHD급 초고강도 실시간 디테일 구현", "움직임 감지 푸시 스마트 알림", "다중 채널 중앙 관제 소프트웨어 제공"],
        colorClass: "from-amber-500/10 to-orange-500/10 border-amber-100",
      },
      {
        icon: "MessageSquareCode",
        title: "프리미엄 스마트 조명 시스템",
        description: "에너지 효율을 극대화한 LED 조명 기구와 스마트 전기 기구를 기반으로, 감성적인 공간 분위기를 완성하는 디밍(밝기 제어) 컨트롤러를 공급합니다.",
        details: ["국가인증 고효율 친환경 웰빙 빛 설계", "빛 조도 스마트 디머 자동 제어 지원", "대기전력 자동 차단 친환경 벽체 스위치"],
        colorClass: "from-emerald-500/10 to-teal-500/10 border-emerald-100",
      },
      {
        icon: "Share2",
        title: "디지털 스마트 도어락",
        description: "신속하고 안전한 지문 마운트, 안심 허수 입력 패스워드, 스마트 원터치 NFC 카드가 융합된 안전의 정점, 세대 전용 하이 테라 도어락 솔루션입니다.",
        details: ["월패드 연동 무선 원클릭 문열림", "침입 및 파손 스마트 경고음 전송", "NFC 및 암호화 이중 인증 도어키"],
        colorClass: "from-pink-500/10 to-rose-500/10 border-pink-100",
      },
      {
        icon: "Zap",
        title: "유지보수 & 기축 월패드 리폼 공사",
        description: "노후 주거 단지의 아크릴 구식 비디오폰을 슬림한 고해상도 디지털 월패드 시스템으로 변경 시공하는 대한민국 1위 최적 개보수 전문팀이 상주합니다.",
        details: ["전국 군단위 촘촘한 직영 서비스 네트워크", "세대 인테리어 맞춤형 리폼 시공 지원", "단지 전면 업그레이드 전담 실사 설계"],
        colorClass: "from-indigo-500/10 to-purple-500/10 border-indigo-100",
      },
    ],
  },
  solutions: {
    title: "성공적인 스마트홈 인프라를 위한 맞춤 솔루션",
    subtitle: "건설 현장, 리모델링 대상 단지, 그리고 일반 거주 세대의 필요성을 관통하는 완벽한 맞춤 처방을 제안합니다.",
    items: [
      {
        id: "indiv",
        title: "일반 세대 및 입주민 자가 교체 솔루션",
        subtitle: "오래된 현관 인터폰을 슬림하고 스마트한 비디오폰으로 간편 교체",
        description: "오래되어 노이즈가 심하고 방문객 얼굴이 보이지 않는 가정의 현관 전용 인터폰을 선명한 대형 컬러 스크린 비디오폰과 스마트 연동 무선 도어락 세트로 쉽고 합리적인 가격에 일괄 셀프 개조할 수 있도록 지원합니다.",
        bullets: [
          "자가 설치가 용이한 콤팩트 컬러 비디오폰 패키지",
          "현관 비밀번호 앞뒤에 허수를 붙이는 도어락 안전 감시",
          "무선 딩동 초인종 및 원클릭 잠금 연동 수신 모듈 기본 탑재"
        ],
        stats: "100%",
        statsLabel: "실시간 세대 방문객 확인 및 안심 지수 향상",
      },
      {
        id: "smb",
        title: "노후 아파트 단지 리모델링 정보통신 공사 솔루션",
        subtitle: "아파트 단지의 공동 시스템을 디지털 스마트 단지로 변모",
        description: "세대 내부 통신 선로 공사의 큰 지출 없이 공동 현관 로비폰과 세대 배선을 최신 보안 디지털 신호 라인으로 리모델링하여 방문자 호출 편의를 극한으로 강화하고 외부 무단 출입자를 완벽하게 통제합니다.",
        bullets: [
          "세대별 도배 손상 없는 하이브리드 디지털 로비 라인 공법",
          "노후 단지 차량 유출입 차단기 및 관리사무소 마스터기 동시 개조",
          "공동 현관 비밀번호 실시간 보안 로테이션 제어"
        ],
        stats: "45%+",
        statsLabel: "단지 자산성 가치 증가 및 주민 치안 개선 만족도",
      },
      {
        id: "enterprise",
        title: "신축 주력 건설 단지 하이엔드 스마트홈 일괄 구축 솔루션",
        subtitle: "국내 명품 대형 브랜드 아파트 단지 주력 공급사로서의 완벽한 특화",
        description: "대한민국 최고 등급 정보통신 아파트 인증 조건에 완벽히 부응하여, 인공지능 보이스 연동 프리미엄 월패드, 빌딩 주차 관제, 고화질 CCTV 다채널 감시, 에너지 디밍 제어를 일괄적으로 도합 관제하는 하이엔드 빌드입니다.",
        bullets: [
          "안전 표준 스마트홈 및 Matter 표준 플랫폼 하이브리드 가동",
          "럭셔리 메탈 글라스 마감 헤어라인 월패드 빌트인 전량 공급",
          "단지 전체 공용 에너지, 조명 전원, 환기 팬 중앙 제어 허브 구성"
        ],
        stats: "Top",
        statsLabel: "전국 주요 1군 건설 브랜드 다수 시공 경험 보증",
      },
    ],
  },
  why: {
    title: "왜 대한민국 대표 기술은 코콤(KOCOM)일까요?",
    subtitle: "더 세련된 디자인과 탄탄한 국산 원천 기술로, 전폭적인 편리함을 가치로 입증합니다.",
    cards: [
      {
        icon: "Compass",
        title: "45년 역사와 굳건한 신뢰",
        description: "1976년 설립 이후 최초의 인터폰 대중화 선도부터 현재 스마트 주거 단지에 이르기까지, 대한민국 방방곡곡의 주거 안전 역사를 지켜온 대표 토종 명가 브랜드입니다.",
      },
      {
        icon: "Clock",
        title: "전국 빈틈없는 서비스망",
        description: "구매 후 설치하고 사라지는 저가 외산 홈캠이나 도어락 브랜드와 격이 다릅니다. 직영 에프터서비스 지점과 전국 통신 대리점 라인이 365일 실시간 수리 및 개보수를 대응합니다.",
      },
      {
        icon: "Target",
        title: "수려한 프리미엄 스페이스 디자인",
        description: "세계적 디자인 어워드 수상을 통해 제품 성능뿐 아니라 벽지 및 벽면에 아름다운 예술품처럼 자연스럽게 융화되는 극단적인 초슬림 베젤의 스마트홈 오브제를 제작합니다.",
      },
      {
        icon: "Heart",
        title: "사람과 동행하는 한글 친화 IoT",
        description: "초등학생 자녀부터 고령층 주민까지 아무런 설명서 없이 화면 터치 한 번으로 안전 상태를 직관적으로 숙지하는 지극히 따뜻한 사용자 휴먼 인터페이스를 제공합니다.",
      },
    ],
  },
  process: {
    title: "설계부터 사후 관리까지 철저한 시스템 구축 프로세스",
    subtitle: "정밀 설계와 완벽한 자재 보장, 책임 엔지니어 시공으로 한 틈의 리스크도 없는 스마트 단지를 실현합니다.",
    steps: [
      {
        step: "01",
        title: "현장 실증 진단 (Discover)",
        description: "노후 리모델링 아파트 단지나 신축 건설 부지의 정보통신 등급 도면, 선로 상태, 주차 차단기 입구를 정밀 체크해 자재 부합성을 사전 관측합니다.",
        deliverable: "현장 설계 적시 분석서 & 가용 스펙 제안서",
      },
      {
        step: "02",
        title: "맞춤 연동 설계 (Design)",
        description: "세대 월패드와 아파트 공용 로비폰, 경비 마스터룸 간의 통신 부하를 차단하는 고성능 패쇄 홈 네트워크 계통 설계도 및 전선 간선도를 완성합니다.",
        deliverable: "스마트홈 종합 연동 계통도 및 제품 디자인 시안",
      },
      {
        step: "03",
        title: "전문팀 책임 시공 (Build)",
        description: "수십 년 경력의 본사 직영 시공 정예 기술자들이 직접 디바이스 하우징 설치, 네트워크 통신 스위칭 인코딩, 세대 전원 안전 장비를 무오차로 정성껏 장착합니다.",
        deliverable: "완공 검수 확인 보고서 및 보안 인코딩 덤프 파일",
      },
      {
        step: "04",
        title: "장기 무상보증 및 케어 (Launch & Scale)",
        description: "입주자 대표회의 및 관리사무소 임직원에 유선 교육 가이드를 기증하고, 긴급 비상 연락 백그라운드 파형 연계를 통해 평생 전폭적인 장기 신뢰 관리를 개시합니다.",
        deliverable: "세대 조작 매뉴얼북 및 365일 품질 보증 인증서",
      },
    ],
  },
  about: {
    title: "스마트 라이프의 중심, 코콤 이야기",
    heading: "기술을 넘어 가장 안전하고 아늑한 가족의 행복 공간을 디자인합니다.",
    text1: "코콤(KOCOM)은 1976년 창립한 이래 끊임없는 기술 개발과 도전 정신으로 한국 정보통신 산업의 중심을 지켜왔습니다. 아파트 복도 인터폰과 비디오폰 제조 분야에서 부동의 1위를 견지하며 세계 최초로 컬러 비디오 인터폰을 수출하는 등 한국 기술력의 저력을 빛내 왔습니다.",
    text2: "우리는 거실의 작은 벽면 월패드 한 장에 최고의 기술력과 사람을 향한 따뜻한 한글 배려를 담아 일상에 안심과 기쁨을 선사하고 있습니다. 이제 코콤은 차세대 대단지 홈 IoT를 비롯하여 공공과 도시의 전방위를 아우르는 하이엔드 지능형 영상 CCTV 방범 안전, 그리고 태양광 고효율 스마트 에너지 LED 조명 기술이 공존하는 글로벌 디지털 스마트 스페이스 명가로 위대하게 주도합니다.",
    missionTitle: "코콤의 가치와 미션",
    missionText: "인간 중심의 편리함과 첨단 보안의 완벽한 융합으로 전 세계 가정이 누릴 수 있는 가장 행복한 공간 생태계를 구축합니다.",
  },
  ctaSection: {
    headline: "여러분의 주거 공간을 더 아름답고 안전하게",
    subheadline: "세대별 월패드 리폼 설치, 아파트 단지 공동 로비폰 개보수, 대단위 CCTV 통합 방범 및 에너지 고효율 조명 구축까지. 45년 이상 검증된 국가 대표 스마트 정보통신 명가 코콤(KOCOM)과 지금 상의하십시오.",
    buttonText: "제품 상담 견적 문의하기 (무료)",
  },
  contact: {
    title: "코콤 제품 상담 및 단지 개보수 구축 접수",
    subtitle: "현관 비디오폰 세대 자가 교체, 낡은 아파트 로비 연동 개보수 시공 공사 문의, 주차 관제 제안, 스마트 빌딩 조명 자재 단가 견적 등 요청 사항을 적어주시면 당사 전문 영업 파트너가 직접 맞춤형 도면과 가격 솔루션을 제시하겠습니다.",
    formName: "문의 및 신청인명",
    formEmail: "이메일 주소",
    formProject: "현장 지역 또는 공동 주택/아파트 조합 단지명",
    formWhat: "필요하신 상세 제품 종류나 공사 계획을 적어주세요.",
    formWhatPlaceholder: "예: 서울시 마포구 아파트 450세대 단지 낡은 아날로그 로비폰을 최신 디지털 기기로 바꾸고 홈폰과 도크 통합 개보수 공사 견적을 받고 싶습니다...",
    formSubmit: "제품/시공 상담 문의 제출하기 (무료 진단)",
    successTitle: "문의 및 상담 신청 기한 접수 완료!",
    successMessage: "제출해주신 고귀한 세부 내역이 KOCOM 본사 및 산하 직영 유통본부 수석 전문팀에 긴급 접수되었습니다! 입력하신 안전한 이메일과 전화번호를 통해 영업 시간 기준 최대 12시간 이내에 전용 견적 실무 피드백 및 시공 일정 상담 전화를 드리겠습니다.",
    supportText: "협력 제안이나 긴급 대량 자재 발주는 코콤 공식 이메일 또는 수도권 통합 상담센터를 통하시면 더더욱 즉각적이고 정밀한 답신을 책임지겠습니다.",
  },
  footer: {
    desc: "스마트홈 IoT 월패드, 고해상도 CCTV 안심 보안 네트워크, 국가인증 친환경 LED 조명 시스템을 아우르는 글로벌 첨단 정보통신 맹주 코콤(KOCOM).",
    rights: "© 2026 KOCOM Co., Ltd. All rights reserved.",
  },
};

export const contentEN: LanguageContent = {
  header: {
    cta: "Online Inquiry",
  },
  hero: {
    headline: "Smart Space, Happy Life\nDesigning Smart Spaces with KOCOM",
    subheadline: "KOCOM completes an advanced digital living ecosystem with our peerless IoT Network Wallpads, UHD Video CCTV defense, and eco-friendly smart LED lighting grids.",
    ctaPrimary: "Inquire Solutions",
    ctaSecondary: "Key Product Lines",
    trustText: "Smart Home IoT Wallpad · Integrated Security Lobbyphones · Intelligent CCTV AI Surveillance · Energy-Saving LED Lighting",
  },
  problem: {
    title: "Smart Housing Challenges in Modern Buildings",
    description: "From premium new apartment development to legacy residential lobby renovations, KOCOM resolves complex digital living bottlenecks through our 40+ years of telecom patent foundations.",
    cards: [
      {
        icon: "Layers",
        title: "Complex IoT Protocols & Connections",
        solution: "KOCOM Open IoT Integration",
        description: "We provide unified smart home hubs and applications compatible with diverse third-party air systems, lighting devices, and IoT gadgets.",
      },
      {
        icon: "Lightbulb",
        title: "Evolving Private Security Threats",
        solution: "Intelligent Video Safety Guard",
        description: "We link high-definition entry cameras, digital lock locks, and hallway sensors into a coordinated burglar shield working 24/7.",
      },
      {
        icon: "TrendingUp",
        title: "Rising Multi-Unit Utilities Expenses",
        solution: "Smart Eco-Lighting Dimmer",
        description: "By integrating occupancy-sensitive smart LED panels and smart energy-cutoff sockets, we dramatically cut daily electricity waste.",
      },
    ],
  },
  services: {
    title: "Our 6 Main Pillars of Technology",
    subtitle: "From elite residential wall controllers to military-grade enterprise CCTV safety and sustainable lights we shelter every space.",
    cards: [
      {
        icon: "Globe",
        title: "Smart Home & IoT Wallpad",
        description: "Premium full-touch display units that control domestic lighting, heat levels, gas taps, and door entrance coordinates right from your wall or smartphone app.",
        details: ["Slim-bezel metal and glass visual aesthetic", "Instant real-time mobile app remote access", "Multi-brand electronic utilities ecosystem interface"],
        colorClass: "from-blue-500/10 to-cyan-500/10 border-blue-100",
      },
      {
        icon: "Cpu",
        title: "Smart Building & Lobbyphone",
        description: "Secure, durable intercom systems, gate locks, car license plate recognition systems, and unified security micro-desks.",
        details: ["Encrypted lobby access control", "High-fidelity loud conversation channels", "Heavy-duty parking checkpoint management"],
        colorClass: "from-violet-500/10 to-fuchsia-500/10 border-violet-100",
      },
      {
        icon: "BookOpen",
        title: "Intelligent CCTV Cameras",
        description: "UHD security cameras and high-capacity central NVR video storage arrays carrying custom movement and perimeter security diagnostics.",
        details: ["Crisp real-time night-vision resolution", "Strategic automatic motion warning alarms", "Central multi-channel monitor software platform"],
        colorClass: "from-amber-500/10 to-orange-500/10 border-amber-100",
      },
      {
        icon: "MessageSquareCode",
        title: "Smart LED Light Networks",
        description: "Eco-friendly lighting products coupled with elegant digital lighting controller keyboards for perfect sensory brightness configurations.",
        details: ["Certified energy-saving healthy flickerless build", "Adjustable warm-to-cool smart touch switches", "Automatic low-power eco wall switches"],
        colorClass: "from-emerald-500/10 to-teal-500/10 border-emerald-100",
      },
      {
        icon: "Share2",
        title: "Secure Digital Door Locks",
        description: "High-speed biometric fingerprint reader, virtual anti-peek pattern code input, and backup secure NFC cards for supreme home entry protection.",
        details: ["Wallpad wireless instant entryway trigger", "Intruder tampering notification alert speaker", "Duress emergency backup passcode encryption"],
        colorClass: "from-pink-500/10 to-rose-500/10 border-pink-100",
      },
      {
        icon: "Zap",
        title: "Renovations & Retrofit Services",
        description: "Our dedicated professional engineering crew specializes in modifying legacy analog lobby speakers into high-performance smart networks.",
        details: ["Nationwide tight rapid warranty support nodes", "Bespoke apartment custom mounting plates", "Complimentary on-site diagnostic survey services"],
        colorClass: "from-indigo-500/10 to-purple-500/10 border-indigo-100",
      },
    ],
  },
  solutions: {
    title: "Practical Security Architectures",
    subtitle: "Strategic approaches designed for new construction developers, residential renovation districts, and modern homeowners.",
    items: [
      {
        id: "indiv",
        title: "Homeowners & DIY Residential Bundles",
        subtitle: "Easily replace legacy door intercoms with sharp color video screens",
        description: "Replace noisy, blurry analog door locks with a crisp, large-display color video phone and wireless interlocking electronic lock package. Keep secure and stay alert with premium-tier intercom engineering.",
        bullets: [
          "Do-it-yourself modular entry phone kit with full wires",
          "Anti-theft door lock concealing real screen digits",
          "Wireless bridge module bridging wall monitors instantly"
        ],
        stats: "100%",
        statsLabel: "Visual door checking & family security index rise",
      },
      {
        id: "smb",
        title: "Multi-Unit Renovation & Telecom Retrofitting",
        subtitle: "Convert old complexes into unified digital communities with minimal cost",
        description: "Upgrade entry points to modern high-durability digital lobby systems without destructive wall painting or massive building expenditures, significantly increasing property value and communal defense.",
        bullets: [
          "Non-destructive digital lines leveraging current conduits",
          "Simultaneous car-gate & security desk hardware upgrades",
          "Encrypted dynamic password systems updated periodically"
        ],
        stats: "45%+",
        statsLabel: "Average property asset security appreciation",
      },
      {
        id: "enterprise",
        title: "Prime Building & High-End Construction",
        subtitle: "First-choice smart home vendor trusted by nationwide top builders",
        description: "Satisfying top-tier telecom construction certificate standards with build-in premium vocal-assistant wall controllers, automatic central park control barriers, and unified utility conservation hubs.",
        bullets: [
          "Hybrid platform compatible with global smart standards",
          "Ultra-luxury hair-line metal glass architectural wallpads",
          "Integrated neighborhood utility conservation backplane dashboards"
        ],
        stats: "Top List",
        statsLabel: "First-tier landmark projects across key cities",
      },
    ],
  },
  why: {
    title: "Why Choose KOCOM Solutions?",
    subtitle: "We prioritize home harmony, durable engineering, and responsive customer relationship networks.",
    cards: [
      {
        icon: "Compass",
        title: "45-Year Legacy of Trust",
        description: "Since 1976, we have set the gold standard of domestic safety and intercom systems in South Korea's housing history.",
      },
      {
        icon: "Clock",
        title: "Direct Nationwide Repair Desk",
        description: "We lead with direct regional branches and thousands of technicians standing by 365 days a year for timely field checkups.",
      },
      {
        icon: "Target",
        title: "Award-Winning Spatial Design",
        description: "Engineered not just as tech gadgets but as gorgeous wall art accessories featuring ultra-slim frames and noble metallic textures.",
      },
      {
        icon: "Heart",
        title: "Human-Friendly IoT Interfaces",
        description: "Accessible to kids and elderly relatives alike with clean graphical displays that require zero complex books or instructions.",
      },
    ],
  },
  process: {
    title: "Our Precision Build Methodology",
    subtitle: "From detailed diagnostic analysis to on-site device mounting, we guarantee flawless delivery with no delays.",
    steps: [
      {
        step: "01",
        title: "On-Site Infrastructure Audit (Discover)",
        description: "Our field engineers analyze your existing wiring constraints, parking spaces, and building entry grids to secure optimal hardware fit.",
        deliverable: "Custom Specifications Blueprint & Quotes",
      },
      {
        step: "02",
        title: "System Flow Engineering (Design)",
        description: "We map out robust, encrypted network layouts to ensure noise-free audio and seamless high-speed data flow across all residential floors.",
        deliverable: "System Interconnection Schematics & Visual Mockups",
      },
      {
        step: "03",
        title: "Direct Professional Installation (Build)",
        description: "Certified field engineers carry out structural housing setups, complex wiring calibrations, and precise smart control configurations.",
        deliverable: "Comprehensive Site Inspection & Verification Record",
      },
      {
        step: "04",
        title: "Continuous Safety Support (Launch & Scale)",
        description: "We provide thorough on-site operation walkthroughs for property personnel and deploy 365-day troubleshooting response channels.",
        deliverable: "Community Wallpad User Manuals & Certified Warranty",
      },
    ],
  },
  about: {
    title: "About KOCOM",
    heading: "Designing beautiful family harmony beyond standard hardware.",
    text1: "Since our foundation in 1976, KOCOM has stood at the absolute heart of South Korea's home telecom revolution. Leading the domestic interior intercom market with our proprietary innovations, KOCOM proud to have pioneered the exportation of high-fidelity color video door phone models to international arenas.",
    text2: "Our core obsession is translating advanced technology into usable household comfort. Today, KOCOM excels far beyond smart screens, developing industrial-grade AI security cameras, high-efficiency smart LED lights, and hybrid green grids to emerge as a global leader in total smart living architectures.",
    missionTitle: "Our Mission & Value",
    missionText: "To synthesize home warmth with iron-clad safety, granting every household on earth the ultimate sanctuary of comfort.",
  },
  ctaSection: {
    headline: "Make Your Special Property Elegant and Secure",
    subheadline: "Reach out to KOCOM (www.kocom.co.kr) for single-unit retrofits, full apartment complex specifications, smart lights, or unified CCTV networks.",
    buttonText: "Request Free Product Guidance & Consult",
  },
  contact: {
    title: "KOCOM Security Consultation Desk",
    subtitle: "Whether you need to upgrade color video phones for an entire district or purchase massive wholesale batches of smart light materials, write to our engineers to get a custom design.",
    formName: "Full Name & Title",
    formEmail: "Email Address",
    formProject: "Location or Apartment Complex Name",
    formWhat: "Tell us about your spatial needs or upgrade goals.",
    formWhatPlaceholder: "E.g., We have a 450-unit residential complex requiring legacy lock and lobby intercom updates, request estimates...",
    formSubmit: "Submit Secure Inquiry (Free Estimate)",
    successTitle: "Inquiry Successfully Transmitted!",
    successMessage: "Your spatial upgrade parameters have been routed directly to KOCOM's Technical Marketing Support Center. An expert commercial engineer will provide detailed estimates and real-site study schedules within 12 business hours.",
    supportText: "For critical wholesales or urgent bidding proposals, please dial or write directly to our regional center for immediate response.",
  },
  footer: {
    desc: "KOCOM Co., Ltd. is a global leader in Smart IoT Wallpads, high-definition security camera networks, and energy-saving eco LED lighting ecosystems.",
    rights: "© 2026 KOCOM Co., Ltd. All rights reserved.",
  },
};
