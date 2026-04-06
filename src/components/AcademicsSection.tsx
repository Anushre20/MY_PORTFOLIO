import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { semester: "Sem 1", sgpa: 8.24 },
  { semester: "Sem 2", sgpa: 8.29 },
  { semester: "Sem 3", sgpa: 9.18 },
];

const AcademicsSection = () => (
  <section id="academics" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Academic <span className="gradient-text">Progress</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-6 sm:p-8"
      >
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 15% 20%)" />
              <XAxis
                dataKey="semester"
                stroke="hsl(215 15% 55%)"
                tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }}
              />
              <YAxis
                domain={[7.5, 10]}
                stroke="hsl(215 15% 55%)"
                tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(230 20% 11% / 0.95)",
                  border: "1px solid hsl(230 15% 25% / 0.5)",
                  borderRadius: "8px",
                  color: "hsl(210 20% 92%)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 13,
                }}
              />
              <Line
                type="monotone"
                dataKey="sgpa"
                stroke="hsl(172 66% 50%)"
                strokeWidth={3}
                dot={{ fill: "hsl(172 66% 50%)", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: "hsl(270 60% 60%)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-8 mt-4">
          {data.map((d) => (
            <div key={d.semester} className="text-center">
              <p className="text-2xl font-bold gradient-text code-font">{d.sgpa}</p>
              <p className="text-xs text-muted-foreground">{d.semester}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AcademicsSection;
