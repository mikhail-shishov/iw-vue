import { createI18n } from 'vue-i18n';

const messages = {
  de: {
    header: {
      nav_about: `Arbeitsprinzipien`,
      nav_strategy: `Strategie`,
      nav_performance: `Erfolgsbilanz`,
      nav_tools: `Tools`,
      nav_tools_all: `Alle Analyse-Tools`,
      nav_tools_cot: `COT Daten`,
      nav_tools_seasonal_charts: `Saisonalität`,
      nav_tools_futures_calc: `Futures Rechner`,
      nav_tools_futures_spec: `Futures-Kontrakt-Spezifikationen`,
      nav_tools_trade_return: `Rendite-Rechner`,
      nav_tools_commodities_map: `Rohstoff-Karte`,
      nav_tools_compound_calc: `Zinseszins-Rechner`,
      nav_education: `Schulungen`,
      nav_education_materials: `Ressourcen`,
      nav_education_coaching: `Coaching`,
      nav_education_webinars: `Webinare`,
      nav_education_subscription: `Abonnement`,
      nav_blog: `Blog`,
      nav_coaching: `Coaching`,
      nav_subscription: `Pro Trader`,
    },
    btn: {
      pro: `Pro Trader insights`,
      coaching: `Eine Demo buchen`,
    },
    home: {
      title: `Trading für Anfänger: Kostenlose Kurse & Ausbildungen – Jetzt Online Lernen!`,
      desc: `Lerne erfolgreiches Trading mit unseren kostenlosen Kursen! Unsere Plattform bietet dir wertvolle Ressourcen, um das Trading für Anfänger zu meistern, inklusive Trading-Signale und Chartanalyse. Starte jetzt deineTrader-Ausbildung und verbessere deine Tradingfähigkeiten mit den besten Strategien!`,
      intro_1: `Erfolgreich Rohstoffe und Futures Traden`,
      intro_2: `Die beste Trading Ausbildung für Einsteiger und Profis: Mit klaren Strategien und echten Ergebnissen. Du brauchst nur 15 Minuten am Tag.`,
      intro_3: `Jetzt kannst du von Profis traden lernen und schnelle Erfolge sehen.`,
      section_1: {
        h1: "Mein Name ist Max Schulz.",
        h2: `Ich bin professioneller Rohstoff- und Futureshändler und erfahrener Trading Coach. Ich folge einer Tradingstrategie, die auf den COT-Daten, der Saisonalität und der Markttechnik basiert.`,
        p_1: `Wichtig beim Trading für Einsteiger und für erfahrene Trader ist vor allem, sich klare Strategien anzueignen, die Märkte zu verstehen und mit Geduld an den Handel heranzugehen. Mein Ziel ist es, Transparenz zu bieten, damit andere Trader ein vollständiges Bild über das Futures Trading nach COT Daten erhalten und aus meinen Erfahrungen als Trading Coach lernen können.`,
        p_2: `Warum setzt erfolgreiches Trading disziplinierte Planung und die richtige Trading Ausbildung voraus? Im Laufe der Jahre habe ich viele Trader kommen und gehen sehen. Meiner Beobachtung nach sind nur etwa 10 % langfristig erfolgreich genug, um das Trading hauptberuflich zu betreiben, so wie ich es tue. Der Hauptgrund dafür ist: das Verhalten, das benötigt wird, um im Trading erfolgreich zu sein, steht im Gegensatz zum menschlichen Verhalten.`,
        p_3: `Die meisten Fehler im Trading entstehen durch die Aktivierung der inneren Abwehrmechanismen, die dazu dienen, uns vor Schaden zu schützen. Das ist der Grund, warum das Trading nach Gefühl und Intuition nicht funktioniert.`,
        p_4: `Man muss zunächst das Trading lernen, von Grund auf. Dann benötigt man eine klar definierte Strategie, gründliche Vorbereitung, die passenden Trading Signale und die Bereitschaft, an sich selbst zu arbeiten.`,
        p_5: `Die gute Nachricht ist, dass deine Chancen auf Erfolg erheblich steigen, wenn du richtig traden lernen kannst und einen Mentor hast, der,`,
        list_1: {
          item_1: `selbst nachweislich ein erfolgreicher Trader ist,`,
          item_2: `einen robusten Track Record über viele Jahre vorweisen kann und`,
          item_3: `der völlig transparent handelt.`
        },
        features: {
          item_1: `Ich veröffentliche seit 2017 alle meine Trades, bevor ich die Order aufgebe.`,
          item_2: `In den letzten 10 Jahren habe ich durchschnittlich 77% jährliche Rendite erzielt.`,
          item_3: `Mit einem Drawdown von weniger als 10%.`
        },
        p_6: `Ich werde oft gefragt: "Wie schnell kann ich mit Trading für Anfänger oder als erfahrener Händler reich werden?" Du solltest von Anfang an wissen, dass es keine "schnell reich werden"-Strategie gibt. Erwarte also nicht, dass du bald deinen Job aufgeben kannst. Erfolgreiches Trading erfordert Zeit und dauerhafte Weiterbildung.`,
        h3: `Man muss:`,
        list_2: {
          item_1: `kontinuierlich an sich arbeiten;`,
          item_2: `Risiken managen;`,
          item_3: `mit Verlusten umgehen;`,
          item_4: `Drawdowns durchstehen;`,
          item_5: `Chartanalyse lernen, usw.`
        },
        p_7: `Traden ist für Anfänger und erfahrene Trader nicht so einfach, wie es viele Trading-Gurus auf YouTube darstellen. Aber mit Willenskraft, Ausdauer, Disziplin und einem guten Trading Kurs ist es möglich, erfolgreich zu sein.`
      },
      section_2: {
        h1: `Mit meiner Strategie und meinem Tradinsansatz konnte ich mich bereits dreimal unter den Top5 in den World Cup Championship of Futures Trading® platzieren.`,
        y_2017: `Platz 3 mit 111% Rendite`,
        y_2019: `Platz 3 mit 156% Rendite`,
        y_2021: `Platz 5 mit 78% Rendite`,
        img_desc: `Max Schulz bei der Entgegennahme seiner ersten Auszeichnung im Jahr 2017`
      },
      section_3: {
        h1: `Kann jeder Trader werden?`,
        p_1: `Ich zeige jedem interessierten Trader schon seit Jahren im Detail, welche Trades ich vorhabe, bevor ich sie umsetze und mit dem Trading anfange. So können alle meiner COT-Strategie folgen.`,
        p_2: `Warum schaffen es trotzdem so viele nicht, meine Renditen zu erreichen? Hier sind einige Beobachtungen, die ich gemacht habe und die du berücksichtigen solltest, bevor du der COT-Strategie folgst:`,
        features: {
          item_1: {
            h: `Falsche Finanzinstrumente`,
            d: `Trading mit nicht-regulierten Produkten wie CFDs oder Forex führt oft zu intransparenten und teuren Transaktionen. Anfänger sollten stattdessen Futures-Kontrakte in ihrem Trading verwenden, um von klaren Preisstrukturen und besseren Renditen zu profitieren. Diese Kontrakte bieten höhere Transparenz und ermöglichen eine bessere Kontrolle über das eigene Risiko.`,
          },
          item_2: {
            h: `Risikomanagement`,
            d: `Der Schutz des Kapitals und die Minimierung von Verlusten haben im Trading stets höchste Priorität. Ich spreche aus Erfahrung, da mein Drawdown seit 2017 nie mehr als 10% betragen hat, bei einer Rendite von 77% pro Jahr. Von mir kannst du in der Ausbildung zum Trader lernen, wann du geduldig auf eine günstige Gelegenheit warten solltest und wann du aggressiv an den Märkten agieren kannst.`,
          },
          item_3: {
            h: `Grundverständnis`,
            d: `Die Fähigkeiten, einen passenden Futureskontrakt auswählen und Bracket Orders richtig platzieren sind wichtig. Wir bieten unseren Mitgliedern einen Basiskurs zum Trading lernen kostenlos an, und es gibt viele Online-Ressourcen (e.g., ein bestes Trading Buch für Anfänger), die dir helfen können, wenn du neu im Handel mit Futures bist. Und unsere Trading Seminare für Anfänger und Profis sind auch sehr nützlich.`,
          },
          item_4: {
            h: `Suche nach dem Heiligen Gral`,
            d: `Wenn du Charttechnik lernst, zusätzliche Indikatoren und immer neuen Optimierungstechniken verstehen musst, machen sie deine Strategie unprofitabel. Die effektivsten Systeme sind oft sehr einfach, und das gilt auch für das Trading. Zu viele Indikatoren und komplexe Anpassungen führen oft dazu, dass Trader die Trading Signale übersehen und den Markt verkomplizieren.`,
          },
          item_5: {
            h: `Emotionen`,
            d: `Beim Trading kommen oft Emotionen wie Angst und Gier auf, was zu schlechten Entscheidungen führen kann. Deshalb ist es wichtig, dass sowohl Anfänger als auch Profis beim Online-Trading lernen, dass sie immerr ruhig und selbstbewusst bleiben. Emotionale Disziplin hilft Händlern, sich auf ihre Strategie zu konzentrieren, anstatt bei Marktschwankungen unüberlegt zu reagieren.`,
          },
          item_6: {
            h: `Wissenslücken`,
            d: `Viele Händler kämpfen aufgrund einer falschen Ausbildung, die wesentliche Konzepte auslässt, mit inkonsistenten Renditen. Ohne ein solides Fundament im Futures-Handel machen Trader oft Fehler. Eine gute Schulung lehrt, sich auf klare, umsetzbare Signale zu konzentrieren, anstatt auf verwirrende Methoden.`,
          },
        },
      },
      cta_h1: `Wenn du überzeugt bist, dass du das Potential dazu hast, dann solltest du nicht länger zögern und mit dem Traden anfangen.`,
    },
    how_we_trade_h1: `So traden wir`,
    how_we_trade_p1: `Unsere Informationen werden täglich aktualisiert und du findest wertvolle Einblicke und wichtige Updates, die für deine Handelsentscheidungen relevant sind. Alle Elemente sind für Benutzer zugänglich, die bei MyIW, unserem Mitgliederbereich, angemeldet sind.`,
    pro_benefits: {
      h1: `Pro Trader Insights Subscription`,
      p1: `Eine fundierte Trader-Ausbildung hilft dir, eine profitable Strategie zu entwickeln und deine Emotionen zu beherrschen. Ich biete angehenden Tradern Einblicke in die Märkte und die Techniken, Charts zu lesen, um dann effektiv im Trading zu sein.`,
      item_1: {
        h: `Wöchentliche Trading-Pläne für deine Entscheidungen`,
        d: `Bleib informiert mit einem wöchentlichen Trading-Plan. Jede Woche analysiere ich die Märkte mit hilfe von COT-Daten, saisonalen Trends und andere Daten, um die vielversprechendsten Chancen herauszufiltern. Die Ergebnisse dieser Analysen teile ich exklusiv mit unseren Mitgliedern.`
      },
      item_2: {
        h: `Lerne von unserer Transparenz`,
        d: `Mit dem Pro Trade Insights Subscription erhältst du Einblick in meine persönliche Watchlist sowie in alle Trades auf den Startup- und COT-1-Konten. Du wirst immer wissen, welche Positionen ich eröffnet habe und welche Märkte ich im Blick habe. So kannst du durch Beobachtung meiner Trades direkt von mir lernen und deine Trading-Fähigkeiten ausbauen.`
      },
      item_3: {
        h: `Erhalte Einblick in unsere Strategie`,
        d: `Interessiert an den Hintergründen der COT-Strategie? Du hast die Möglichkeit, die tägliche Umsetzung dieser Strategie in der Praxis zu erleben und herauszufinden, ob Swing Trading auf COT-Basis zu dir passt. Durch Beobachtung dieser Strategie in der Praxis kannst du deine Effektivität bewerten und Marktbewegungen lernen.`
      },
      item_4: {
        h: `Zugang zu relevanten News und zusätzlichem Content`,
        d: `Bleib bestens informiert: Mit Pro Trade Insights erhältst du laufend wichtige Trading-News sowie weitere Tipps zur Anwendung unserer Strategie, z.B., über die “Trading Ausbildung Deutschland”, “Technische Chartanalyse Lernen”, “Trading Lernen PDF”, und online Dokumente.`
      }
    },
    reviews: {
      h1: `Bewertungen`,
      item_1: `“Larry Williams sollte jedem Future Trader eine bekannte Größe sein. Auf der Suche nach seinem Lehrling bin ich auf insider-week gestoßen. Das Team ist sehr gut, vor allem einen großen Lob und Dank an Markus Winkler. Er macht seine Arbeit perfekt als Coach, die Sichtweise an die Märkte übermittelt er einwandfrei. Ich nähme am COT-1 und COT-2 Coaching teil. Die Inputs, was man hier übermittelt bekommt, ist immens, allerdings möchte ich erwähnen, dass das Thema Trading personenabhängig ist, ob man dafür geeignet ist oder auch nicht. Die Coachs übermittelt in den Webinaren sehr gut ihre Marktanalysen, man lernt immer wieder dazu. Mir hat der folgende Satz gefallen, "wir zeigen euch den Weg von A nach B, allerdings müsst Ihr den Weg selber beschreiten". So sieht es aus im Leben.”`,
      item_2: `“Die Erfahrungen mit InsiderWeek sind durchweg positiv. Das Coaching wird auf einem sehr hohen qualitativen Niveau durchgeführt. Das gesamte Team von IW hat das Ziel die Schüler nach vorne zu bringen. Der Schüler wird dabei auf seinem Weg zum Rohstofftrader sehr gut betreut. Wer sich für COT Daten und das Rohstofftrading interessiert kommt an der Schulung bei IW nicht vorbei.”`,
      item_3: `“Ich bedanke mich vielmals beim InsiderWeek Team für das großartige Ausbildungsprogramm. Das Wissen welches hier vermittelt wird kann sowohl vom absoluten Anfänger bis hin zum Profi jedem nützen und unterstützen an der Börse Geld zu verdienen. Geschenkt wird einem nichts. Es liegt an jedem selbst und der Disziplin Zeit und Energie in die Ausbildung zu investieren. Vom Team erhält man jederzeit Hilfe und alle Fragen werden entweder per Email oder in den zahlreichen Webinaren beantwortet. Ich bin rundum glücklich und sehr zufrieden.”`
    },
    tools: {
      h1: `Tools für das Trading`,
      p1: `Die Entscheidung, sich einer Trading Schule oder Coach anzuvertrauen, steigert die Erfolgschancen erheblich. Unsere Plattform bietet eine Auswahl an leistungsstarken Trading-Tools, die dir helfen, fundierte Entscheidungen zu treffen und deine Trading-Strategien zu optimieren. Von Hebelprodukten für Anfänger und Marktsignalen bis hin zu Wirtschaftskalendern und Risikomanagement-Tools – hier findest du alles, was du brauchst, um dein Trading Lernen seriös und erfolgreich zu gestalten.`,
      p2: `Unsere Werkzeuge unterstützen dich dabei, den Markt besser zu verstehen, die besten Gelegenheiten zu erkennen und die beste Trading Plattform für Anfänger und erfahrene Trader zu finden.`
    },
    subscribe: {
      h1: `Newsletter abonnieren`,
      p1: `Möchtest du einen Trading Kurs für Anfänger und Profis? Du erhältst aktuelle Trading-Tipps, Marktanalysen und Neuigkeiten direkt in dein Postfach! Bleib auf dem Laufenden und verbessere Trading-Strategien mit den neuesten Erkenntnissen und Trends.`,
      input_name: `Vorname und Name *`,
      input_email: `Email`,
      input_gdpr: `Ich akzeptiere die Nutzungsbedingungen und die Datenschutzrichtlinien von InsiderWeek.`,
      input_submit: `Ja, informiert mich`
    }
  },
  en: {
    header: {
      nav_about: `Our Principles`,
      nav_strategy: `Strategy`,
      nav_performance: `Performance`,
      nav_tools: `Tools`,
      nav_tools_all: `All tools`,
      nav_tools_cot: `COT Data`,
      nav_tools_seasonal_charts: `Seasonality`,
      nav_tools_futures_calc: `Futures Calculator`,
      nav_tools_futures_spec: `Futures Contract Specifications`,
      nav_tools_trade_return: `Trade Return Calculator`,
      nav_tools_commodities_map: `Commodities Map`,
      nav_tools_compound_calc: `Compound Interest Calculator`,
      nav_education: `Education`,
      nav_education_materials: `Downloads`,
      nav_education_coaching: `Coaching`,
      nav_education_webinars: `Webinars`,
      nav_education_subscription: `Subscription`,
      nav_blog: `Blog`,
      nav_coaching: `Coaching`,
      nav_subscription: `Pro Trader`,
    },
    btn: {
      pro: `Pro Trader insights`,
      coaching: `Book demo session`,
    },
    home: {
      title: `Learn to be a successful futures trader by following my trades`,
      desc: `Unlock the secrets of swing trading futures and commodities with our expert guidance! Learn to effectively utilize COT data and enhance your trading strategy for maximum profit. Join us now and elevate your trading skills!`,
      intro_1: `How to Trade Commodities and Futures Successfully`,
      intro_2: `The best trading educational resources for beginners and professionals. With clear strategies and real results. You only need 15 minutes a day.`,
      intro_3: `Learn to trade from professionals and see quick results.`,
      section_1: {
        h1_1: "My name is Max Schulz.",
        h2_1: `I am a professional commodity and futures trader and an experienced trading coach who follows trading strategies based on COT data, seasonality, and market techniques.`,
        p_1: `The key to trading for both beginners and experienced traders lies primarily in the adoption of clear strategies, understanding the markets, and approaching trading with patience. My goal is to make it transparent so that other traders can gain a complete understanding of futures trading based on COT data and learn from my experience as a trading coach.`,
        p_2: `Why does successful trading require disciplined planning and the right education? Over the years, I have seen many traders come and go. From what I have observed, only about 10% lead to sustainable success in trading as a full-time career, like the one that I have these days. The main reason is that the behavior needed to succeed in trading often goes against natural human instincts.`,
        p_3: `Most trading mistakes occur when our internal defense mechanisms kick in to protect us from harm. This is why trading based on gut feelings and intuition does not work at all.`,
        p_4: `To succeed, you need to learn trading from the basics. This means that one requires a clearly defined strategy, thorough preparation, the right trading signals, and the willingness to work on yourself.`,
        p_5: `The good news is that your chances of success increase when you learn to trade properly from a mentor who:`,
        list_1: {
          item_1: `is a proven successful trader,`,
          item_2: `has a solid track record over many years,`,
          item_3: `and trades with complete transparency.`
        },
        features_1: {
          item_1: `Since 2017, I have been sharing all my trades publicly before placing any orders`,
          item_2: `Over the past 10 years, I have averaged a 77% annual return`,
          item_3: `I have kept my drawdowns consistently below 10%`
        },
        p_6: `I am often asked, “How quickly can I get rich from trading as a beginner or an experienced trader?” The truth is, there is no “get rich quickly” strategy. So do not expect to quit your job soon. Successful trading takes time and requires continuous learning.`,
        h3_1: `Man muss:`,
        list_2: {
          item_1: `kontinuierlich an sich arbeiten;`,
          item_2: `Risiken managen;`,
          item_3: `mit Verlusten umgehen;`,
          item_4: `Drawdowns durchstehen;`,
          item_5: `Chartanalyse lernen, usw.`
        },
        p_7: `Traden ist für Anfänger und erfahrene Trader nicht so einfach, wie es viele Trading-Gurus auf YouTube darstellen. Aber mit Willenskraft, Ausdauer, Disziplin und einem guten Trading Kurs ist es möglich, erfolgreich zu sein.`
      },
      section_2: {
        h1_1: `Max Schulz has already reached the top 5 place in the World Cup Championship of Futures Trading® three times.`,
        y_2017: `3rd place with 111% return`,
        y_2019: `3rd place with 156% return`,
        y_2021: `5th place with 78% return`,
        img_desc: `Max Schulz accepting his first award in 2017.`
      },
      section_3: {
        h1_1: `Is Trading Suitable for Everyone?`,
        p_1: `For years, I have been sharing my well-detailed trades with anyone interested before I actually execute them. This is how those involved can follow my COT strategy.`,
        p_2: `But why do so many still fail to achieve my returns? Here are a few key observations to consider before diving into the COT strategy`,
        features: {
          item_1: {
            h: `Wrong Financial Instruments`,
            d: `Trading with unregulated products like CFDs or Forex often leads to opaque and costly transactions. It is better for beginners to focus on futures contracts, which may offer greater transparency and more productive risk management, to benefit from clear pricing structures and better returns.`,
          },
          item_2: {
            h: `Risk Management`,
            d: `Protecting your capital and minimizing losses should always be the top priority in trading. Speaking about my own experience, my drawdown has never exceeded 10% since 2014, while achieving an average return of 77% per year. In my trading courses, you will learn how to patiently wait for a good opportunity and when to act decisively within the framework of the available markets.`,
          },
          item_3: {
            h: `Basic Knowledge`,
            d: `It is essential to understand how to choose the right futures contract and place bracket orders correctly. We offer our members a free basic course to help them learn to trade. Besides, there are plenty of other online resources (like the best trading books for beginners) that can guide you if you are new to futures trading. Our trading seminars were designed for both beginners and experienced traders alike, and these are incredibly useful.`,
          },
          item_4: {
            h: `Searching for the Holy Grail`,
            d: `Trying to master every chart pattern, indicator, or optimization technique can make your strategy unprofitable. The truth is, that the best trading systems are often the simplest. Using too many indicators or making things overly complex can cause you to miss clear trading signals and overcomplicate the market.`,
          },
          item_5: {
            h: `Managing Your Emotions`,
            d: `Emotions like fear and greed often get in the way of trading success, leading to poor decisions in the end. Therefore, both beginners and experienced traders need to stay calm and confident during any online procedure. Keeping your emotions in check helps you stick to your strategy instead of reacting impulsively to market fluctuations.`,
          },
          item_6: {
            h: `Filling in the Knowledge Gaps`,
            d: `inconsistent results often come from a lack of relevant education. If you cannot comprehend futures trading, mistakes are inevitable. Good training usually focuses on clear, actionable signals and simple strategies, but never overwhelms you with confusing methods.`,
          },
        },
      },
      cta_h1: `If you believe in your potential, do not hesitate — take the first step and start trading today.`,
    },
    how_we_trade_h1: `This is How We Trade`,
    how_we_trade_p1: `We update our content daily, which is to offer valuable insights and key updates to help with your trading decisions anytime. All materials are available to members registered in MyIW, i.e., our exclusive members' area.`,
    pro_benefits: {
      h1: `Pro Trader Insights Subscription`,
      p1: `Eine fundierte Trader-Ausbildung hilft dir, eine profitable Strategie zu entwickeln und deine Emotionen zu beherrschen. Ich biete angehenden Tradern Einblicke in die Märkte und die Techniken, Charts zu lesen, um dann effektiv im Trading zu sein.`,
      item_1: {
        h: `Wöchentliche Trading-Pläne für deine Entscheidungen`,
        d: `Bleib informiert mit einem wöchentlichen Trading-Plan. Jede Woche analysiere ich die Märkte mit hilfe von COT-Daten, saisonalen Trends und andere Daten, um die vielversprechendsten Chancen herauszufiltern. Die Ergebnisse dieser Analysen teile ich exklusiv mit unseren Mitgliedern.`
      },
      item_2: {
        h: `Lerne von unserer Transparenz`,
        d: `Mit dem Pro Trade Insights Subscription erhältst du Einblick in meine persönliche Watchlist sowie in alle Trades auf den Startup- und COT-1-Konten. Du wirst immer wissen, welche Positionen ich eröffnet habe und welche Märkte ich im Blick habe. So kannst du durch Beobachtung meiner Trades direkt von mir lernen und deine Trading-Fähigkeiten ausbauen.`
      },
      item_3: {
        h: `Erhalte Einblick in unsere Strategie`,
        d: `Interessiert an den Hintergründen der COT-Strategie? Du hast die Möglichkeit, die tägliche Umsetzung dieser Strategie in der Praxis zu erleben und herauszufinden, ob Swing Trading auf COT-Basis zu dir passt. Durch Beobachtung dieser Strategie in der Praxis kannst du deine Effektivität bewerten und Marktbewegungen lernen.`
      },
      item_4: {
        h: `Zugang zu relevanten News und zusätzlichem Content`,
        d: `Bleib bestens informiert: Mit Pro Trade Insights erhältst du laufend wichtige Trading-News sowie weitere Tipps zur Anwendung unserer Strategie, z.B., über die “Trading Ausbildung Deutschland”, “Technische Chartanalyse Lernen”, “Trading Lernen PDF”, und online Dokumente.`
      }
    },
    reviews: {
      h1: `Testimonials`,
      item_1: `“I have been with Insider-Week since 2020 and have done COT-1 and WCC coaching. And I’m rather successful with COT-2 strategy, in particular. I am currently an active member of the weather futures trading coaching. I can definitely recommend InsiderWeek. Max and his team publish their results, which have been growing steadily since the beginning. The course content is easy to understand and the weekly coaching sessions are very practical. If you have any questions, the team will answer you immediately and are always very helpful. The community is also very helpful. You can always exchange ideas and share trading application codes or other experiences.”`,
      item_2: `“I would like to thank the InsiderWeek team for the excellent training program. The knowledge that is imparted here can be useful to everyone, from absolute beginners to professionals, and will help them to make money in the exchange market. Nothing is given to you for free. It's up to you and your discipline to invest time and energy in learning. You can get necessary assistance from the team at all times and all questions will be answered by email or in numerous webinars. I'm happy and very satisfied.”`,
      item_3: `“The experience with InsiderWeek has been consistently positive. The coaching is of a very high quality. The aim of the entire InsiderWeek team is to move the students forward. The student is very well coached on the way to becoming a commodity trader. If you are interested in COT data and commodity trading, you cannot miss the training at InsiderWeek.”`
    },
    tools: {
      h1: `Trading Tools`,
      p1: `Choosing to invest with the support from a trading school or a coach can increase your chances of success. Our platform offers a range of powerful trading tools designed to help you make informed decisions and optimize your trading strategies, too. Here, you will find everything you need to ensure that your trading education is both professional and successful.`,
      p2: `Our tools help you better understand the market, identify the best opportunities, and find the most suitable trading platform.`
    },
    subscribe: {
      h1: `Subscribe to newsletter`,
      p1: `Are you looking for a trading course for beginners and professionals? Get the latest trading tips, market analyses, and news directly in your inbox! Let us stay updated and improve trading strategies together.`,
      input_name: `Your name and surname *`,
      input_email: `Email`,
      input_gdpr: `I accept InsiderWeek's Terms of Service and Privacy Policy.`,
      input_submit: `Sign up for newsletter`
    }
  }
}

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages,
});

export default i18n;