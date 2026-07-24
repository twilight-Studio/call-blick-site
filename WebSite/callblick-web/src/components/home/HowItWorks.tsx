import {
  BarChart3,
  Bot,
  CheckCircle2,
  FileAudio,
  Gauge,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const workflow = [
  {
    title: "Upload call data",
    description: "Teams upload recorded calls asynchronously. CallBlick prepares the audio for secure processing.",
    Icon: FileAudio,
  },
  {
    title: "Transcribe and diarize",
    description: "The system separates speakers, timestamps turns, and creates a traceable transcript.",
    Icon: MessageSquareText,
  },
  {
    title: "Answer QA questions",
    description: "Configured questionnaires are answered against transcript evidence and call context.",
    Icon: Bot,
  },
  {
    title: "Check compliance",
    description: "Policies, red flags, keywords, topics, and required disclosures are checked consistently.",
    Icon: ShieldCheck,
  },
  {
    title: "Analyze the conversation",
    description: "Summaries, sentiment analysis, customer satisfaction indicators, and topic classification are generated.",
    Icon: SearchCheck,
  },
  {
    title: "Score performance",
    description: "Agent performance scoring and graphical reporting help managers understand trends fast.",
    Icon: Gauge,
  },
];

const outputSignals = [
  { label: "Call summaries", Icon: MessageSquareText },
  { label: "Sentiment analysis", Icon: BarChart3 },
  { label: "Compliance checks", Icon: ShieldCheck },
  { label: "Keyword detection", Icon: SearchCheck },
  { label: "Topic classification", Icon: Bot },
  { label: "Agent scoring", Icon: CheckCircle2 },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,25,49,0.42) 30%, rgba(10,25,49,0.42) 72%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeInSection className="mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: "#2C8FFF" }}>
            Secure asynchronous workflow
          </p>
          <h2
            className="font-black tracking-[-0.03em]"
            style={{ color: "#EEF4FF", fontSize: "clamp(32px,4.5vw,52px)", lineHeight: "1.05" }}
          >
            From uploaded call
            <br />
            to explainable insight.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "#B3CFE5" }}>
            An average call can be processed in as little as 60 seconds, depending on length, model selection, and the selected privacy plan.
          </p>
        </FadeInSection>

        <div
          className="rounded-3xl p-5 md:p-7"
          style={{
            background: "rgba(10,25,49,0.62)",
            border: "1px solid rgba(44,143,255,0.16)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {workflow.map(({ title, description, Icon }, index) => (
              <FadeInSection key={title} delay={index * 70}>
                <div
                  className="relative h-full rounded-2xl p-5 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(44,143,255,0.1), rgba(255,255,255,0.025))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(44,143,255,0.14)", color: "#2C8FFF" }}
                    >
                      <Icon size={21} />
                    </div>
                    <div>
                      <p className="text-sm font-black mb-1" style={{ color: "#7AB8FF" }}>
                        Step {index + 1}
                      </p>
                      <h3 className="text-lg font-black mb-2" style={{ color: "#EEF4FF" }}>
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#B3CFE5" }}>
                        {description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 animate-workflow-progress"
                    style={{
                      width: "100%",
                      background: "linear-gradient(90deg, transparent, #2C8FFF, transparent)",
                      animationDelay: `${index * 0.35}s`,
                    }}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {outputSignals.map(({ label, Icon }) => (
              <div
                key={label}
                className="rounded-2xl px-4 py-3 flex items-center gap-2"
                style={{
                  background: "rgba(2,9,18,0.52)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#B3CFE5",
                }}
              >
                <Icon size={16} style={{ color: "#2C8FFF", flexShrink: 0 }} />
                <span className="text-sm font-bold leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
