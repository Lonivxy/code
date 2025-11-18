'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sun, Moon, Palette } from 'lucide-react'

type Language = 'zh' | 'en' | 'ja'
type Theme = 'light' | 'dark' | 'purple' | 'green' | 'pink' | 'violet'

const translations = {
  zh: {
    loading: '加载中，如加载时间过长，请检查你的网络状况与设备是否支持javascript',
    tagline: '跨越山海，剑指群星。齿轮轰鸣，炊烟升起。',
    about: '关于整合包',
    aboutDesc: 'Explorer\'s Feast 是一款大型冒险整合包，将 Minecraft 转变为跨越多个维度、文明和烹饪传统的史诗之旅。围绕探索、战斗、科技和生活模拟四大核心支柱构建，这款整合包为每种类型的玩家提供无限可能。',
    exploration: '探索与新世界',
    explorationDesc: '体验由 Terralith、Biomes O\' Plenty 协同工作带来的彻底重塑的地形生成。',
    combat: '战斗与冒险',
    combatDesc: '体验由 Epic Fight、Spartan Weaponry 驱动的全面革新战斗系统。',
    technology: '科技与自动化',
    technologyDesc: '建造庞大的工业帝国，将 Create 的动力工程与 Mekanism 的高级加工系统相结合。',
    culinary: '烹饪与生活',
    culinaryDesc: '用 Farmer\'s Delight 及其 10+ 扩展组成的庞大家族创造精美的烹饪杰作。',
    requirements: '系统配置',
    requirementsDesc: 'Java 21 推荐 | 最低 6GB 内存 | 推荐 10GB+ 光影支持',
    download: '前往 Modrinth 下载',
    discord: '加入 Discord 社区',
    qqGroup: '加入 QQ 群',
    bilibili: '作者 B 站',
    copyright: '© 2025 Lonivxy & KimiOkComputer',
    totalMods: '总模组数',
    structures: '建筑结构',
    biomes: '生物群系',
    performance: '性能提升',
    themes: {
      light: '明亮',
      dark: '暗黑',
      purple: '淡紫',
      green: '翠绿',
      pink: '樱花',
      violet: '深紫',
    }
  },
  en: {
    loading: 'Loading... If it takes too long, please check your network connection and ensure JavaScript is enabled',
    tagline: 'Across mountains and seas, with blades that pierce the stars. Where gears thunder and hearth fires rise.',
    about: 'About This Modpack',
    aboutDesc: 'Explorer\'s Feast is a massive adventure modpack that transforms Minecraft into an epic journey spanning multiple dimensions, civilizations, and culinary traditions. Built around four core pillars - exploration, combat, technology, and life simulation - this pack offers endless possibilities for every type of player.',
    exploration: 'Exploration & New Worlds',
    explorationDesc: 'Experience drastically redesigned terrain generation with Terralith, Biomes O\' Plenty working in harmony.',
    combat: 'Combat & Adventure',
    combatDesc: 'Experience a completely overhauled combat system powered by Epic Fight, Spartan Weaponry.',
    technology: 'Technology & Automation',
    technologyDesc: 'Build sprawling industrial empires combining Create\'s kinetic engineering with Mekanism\'s advanced processing.',
    culinary: 'Culinary Arts & Life',
    culinaryDesc: 'Create elaborate culinary masterpieces with Farmer\'s Delight and its expansive family of 10+ add-ons.',
    requirements: 'System Requirements',
    requirementsDesc: 'Java 21 Recommended | 6GB Min Memory | 10GB+ Recommended with Shaders',
    download: 'Download on Modrinth',
    discord: 'Join Discord Community',
    qqGroup: 'Join QQ Group',
    bilibili: 'YouTube Channel',
    copyright: '© 2025 Lonivxy & KimiOkComputer',
    totalMods: 'Total Mods',
    structures: 'Structures',
    biomes: 'Biomes',
    performance: 'FPS Boost',
    themes: {
      light: 'Light',
      dark: 'Dark',
      purple: 'Purple',
      green: 'Green',
      pink: 'Pink',
      violet: 'Violet',
    }
  },
  ja: {
    loading: '読み込み中...時間がかかる場合は、ネットワーク接続を確認し、JavaScriptが有効になっていることを確認してください',
    tagline: '山と海を越え、剣は星を貫く。歯車は轟き、かまどの煙は昇る。',
    about: 'MODパックについて',
    aboutDesc: 'Explorer\'s Feast は、Minecraft を複数の次元、文明、料理の伝統にまたがる壮大な旅に変える大規模なアドベンチャー統合パックです。探索、戦闘、テクノロジー、生活シミュレーションの 4 つの柱を中心に構築され、あらゆるタイプのプレイヤーに無限の可能性を提供します。',
    exploration: '探索と新世界',
    explorationDesc: 'Terralith、Biomes O\' Plenty が調和して動作する、大幅に再設計された地形生成を体験してください。',
    combat: '戦闘と冒険',
    combatDesc: 'Epic Fight、Spartan Weaponry によって動作する完全にオーバーホールされた戦闘システムを体験してください。',
    technology: 'テクノロジーと自動化',
    technologyDesc: 'Create の運動エンジニアリングと Mekanism の高度な処理システムを組み合わせた広大な産業帝国を構築してください。',
    culinary: '料理と生活',
    culinaryDesc: 'Farmer\'s Delight と、10 以上のアドオンの広範なファミリーで、精巧な料理の傑作を作成してください。',
    requirements: 'システム要件',
    requirementsDesc: 'Java 21 推奨 | 最小 6GB メモリ | シェーダー付き 10GB+ 推奨',
    download: 'Modrinth でダウンロード',
    discord: 'Discord コミュニティに参加',
    qqGroup: 'QQ グループに参加',
    bilibili: 'YouTube チャンネル',
    copyright: '© 2025 Lonivxy & KimiOkComputer',
    totalMods: '総 MOD 数',
    structures: '構造物',
    biomes: 'バイオーム',
    performance: 'FPS 向上',
    themes: {
      light: 'ライト',
      dark: 'ダーク',
      purple: 'パープル',
      green: 'グリーン',
      pink: 'ピンク',
      violet: 'バイオレット',
    }
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')
  const [language, setLanguage] = useState<Language>('en')
  const [typedText, setTypedText] = useState('')
  const [cursorChar, setCursorChar] = useState('_')
  const [isLoading, setIsLoading] = useState(true)
  const [showThemeSelector, setShowThemeSelector] = useState(false)

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('zh')) {
      setLanguage('zh')
    } else if (browserLang.startsWith('ja')) {
      setLanguage('ja')
    } else {
      setLanguage('en')
    }
    
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
    
    setMounted(true)
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const text = "Explorer's Feast"
    let index = 0
    let isDeleting = false
    let flashCount = 0
    let isFlashing = false

    const animate = () => {
      if (isFlashing) {
        flashCount++
        setCursorChar(flashCount % 2 === 0 ? cursorChar : '')
        if (flashCount >= 4) {
          flashCount = 0
          isFlashing = false
          if (isDeleting) {
            setCursorChar('|')
          } else {
            setCursorChar('|')
            isDeleting = true
          }
        }
      } else if (!isDeleting) {
        if (index <= text.length) {
          setTypedText(text.substring(0, index))
          index++
        } else {
          isFlashing = true
          flashCount = 0
        }
      } else {
        if (index > 0) {
          setTypedText(text.substring(0, index))
          index--
        } else {
          isFlashing = true
          flashCount = 0
          setCursorChar('_')
          isDeleting = false
        }
      }
    }

    const interval = setInterval(animate, isFlashing ? 500 : (isDeleting ? 80 : 150))
    return () => clearInterval(interval)
  }, [mounted, cursorChar])

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.className = ''
    if (newTheme !== 'light') {
      document.documentElement.classList.add(newTheme)
    }
  }

  const toggleTheme = () => {
    setShowThemeSelector(!showThemeSelector)
  }

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    setShowThemeSelector(false)
  }

  const t = translations[language]

  if (!mounted) {
    return null
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <p className="text-sm text-muted-foreground max-w-md text-center px-4">{t.loading}</p>
        </div>
      )}

      <div className="min-h-screen bg-background text-foreground">
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <img 
              src="https://cdn.modrinth.com/data/d1rE2v8g/10590dcc0d7219f0015770051027376da465ed60_96.webp" 
              alt="Explorer's Feast Logo" 
              className="h-8 w-8"
            />
            <div className="flex items-center gap-2 sm:gap-4">
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-[80px] sm:w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  <Palette className="h-5 w-5" />
                </Button>
                {showThemeSelector && (
                  <div className="absolute top-full right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg p-2 min-w-[140px]">
                    {(['light', 'dark', 'purple', 'green', 'pink', 'violet'] as Theme[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => selectTheme(t)}
                        className="w-full text-left px-3 py-2 hover:bg-accent rounded text-sm transition-colors"
                      >
                        {translations[language].themes[t]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-foreground/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 font-mono">
                {typedText}
                <span className="opacity-70">{cursorChar}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-4">
                {t.tagline}
              </p>
            </div>

            <StatsSection language={language} />
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <FeatureCard 
                icon={<i className="fas fa-compass text-3xl sm:text-4xl" />}
                title={t.exploration}
                description={t.explorationDesc}
              />
              <FeatureCard 
                icon={<i className="fas fa-swords text-3xl sm:text-4xl" />}
                title={t.combat}
                description={t.combatDesc}
              />
              <FeatureCard 
                icon={<i className="fas fa-cog text-3xl sm:text-4xl" />}
                title={t.technology}
                description={t.technologyDesc}
              />
              <FeatureCard 
                icon={<i className="fas fa-utensils text-3xl sm:text-4xl" />}
                title={t.culinary}
                description={t.culinaryDesc}
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{t.requirements}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{t.requirementsDesc}</p>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              onClick={() => window.open('https://modrinth.com/modpack/exf', '_blank')}
            >
              <i className="fas fa-download mr-2" />
              {t.download}
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://dsc.gg/cgsbs', '_blank')}
              >
                <i className="fab fa-discord mr-2" />
                {t.discord}
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://qm.qq.com/q/Xq5Y5Nj4yc', '_blank')}
              >
                <i className="fab fa-qq mr-2" />
                {t.qqGroup}
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open(
                  language === 'zh' 
                    ? 'https://space.bilibili.com/591406440' 
                    : 'https://www.youtube.com/@lonivxy',
                  '_blank'
                )}
              >
                <i className={`fab fa-${language === 'zh' ? 'bilibili' : 'youtube'} mr-2`} />
                {t.bilibili}
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 sm:px-6 border-t border-border">
          <div className="container mx-auto text-center">
            <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in">
              {t.copyright}
            </p>
          </div>
        </footer>

        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </div>
    </>
  )
}

function StatsSection({ language }: { language: Language }) {
  const [stats, setStats] = useState({ mods: 0, structures: 0, biomes: 0, fps: 0 })
  const [showPlus, setShowPlus] = useState({ mods: false, structures: false, biomes: false, fps: false })

  useEffect(() => {
    const targets = { mods: 300, structures: 500, biomes: 150, fps: 500 }
    const duration = 3000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setStats({
        mods: Math.floor(targets.mods * progress),
        structures: Math.floor(targets.structures * progress),
        biomes: Math.floor(targets.biomes * progress),
        fps: Math.floor(targets.fps * progress),
      })

      if (step >= steps) {
        setStats(targets)
        setTimeout(() => {
          setShowPlus({ mods: true, structures: true, biomes: true, fps: true })
        }, 100)
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const t = translations[language]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
      <StatCard value={stats.mods} label={t.totalMods} showPlus={showPlus.mods} />
      <StatCard value={stats.structures} label={t.structures} showPlus={showPlus.structures} />
      <StatCard value={stats.biomes} label={t.biomes} showPlus={showPlus.biomes} />
      <StatCard value={stats.fps} label={t.performance} showPlus={showPlus.fps} suffix="%" />
    </div>
  )
}

function StatCard({ value, label, showPlus, suffix = '' }: { value: number; label: string; showPlus: boolean; suffix?: string }) {
  return (
    <div className="backdrop-blur-lg bg-card/50 border border-border rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
        {value}{suffix}
        {showPlus && <span className="animate-ping inline-block ml-1">+</span>}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="backdrop-blur-lg bg-card/50 border border-border rounded-lg p-6 sm:p-8 hover:bg-card/70 transition-all hover:scale-[1.02]">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
