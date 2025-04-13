import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import "../styles/Skills.css";

const Skills = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    if (chartRef.current) {
      // Use dark theme for the chart
      echarts.registerTheme('cosmic', {
        backgroundColor: 'transparent',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      });

      chart = echarts.init(chartRef.current, 'cosmic');
      const option = {
        radar: {
          indicator: [
            { name: 'React', max: 100 },
            { name: 'Python', max: 100 },
            { name: 'UI/UX', max: 100 },
            { name: 'Node.js', max: 100 },
            { name: 'JavaScript', max: 100},
            { name: 'TypeScript', max: 100 },
            { name: 'HTML/CSS', max: 100 }
          ],
          radius: '65%',
          splitNumber: 4,
          axisName: {
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: 14,
            fontWeight: 'bold',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 5,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(255, 255, 255, 0.05)'],
              shadowColor: 'rgba(147, 51, 234, 0.1)',
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)',
              width: 1,
              type: 'dashed',
            },
          },
        },
        series: [
          {
            name: 'Skills',
            type: 'radar',
            data: [
              {
                value: [90, 95, 92, 85, 88, 90, 95],
                name: 'Skills',
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(147, 51, 234, 0.8)' },
                    { offset: 1, color: 'rgba(79, 70, 229, 0.4)' }
                  ]),
                  shadowColor: 'rgba(147, 51, 234, 0.5)',
                  shadowBlur: 15,
                  opacity: 0.8
                },
                lineStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#9333EA' },
                    { offset: 1, color: '#4F46E5' }
                  ]),
                  width: 3,
                  shadowColor: 'rgba(147, 51, 234, 0.5)',
                  shadowBlur: 10,
                },
                itemStyle: {
                  color: '#9333EA',
                  borderColor: '#ffffff',
                  borderWidth: 2,
                  shadowColor: 'rgba(147, 51, 234, 0.8)',
                  shadowBlur: 10,
                },
                symbolSize: 8,
                emphasis: {
                  itemStyle: {
                    color: '#4F46E5',
                    shadowColor: 'rgba(147, 51, 234, 1)',
                    shadowBlur: 15,
                  }
                }
              },
            ],
            animation: true,
            animationDuration: 1500,
            animationEasing: 'cubicOut',
          },
        ],
      };
      chart.setOption(option);

      // Add resize listener
      const resizeChart = () => chart.resize();
      window.addEventListener('resize', resizeChart);

      // Add animation on hover
      chartRef.current.addEventListener('mouseenter', () => {
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        });
      });

      chartRef.current.addEventListener('mouseleave', () => {
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: 0
        });
      });

      return () => {
        window.removeEventListener('resize', resizeChart);
        chartRef.current?.removeEventListener('mouseenter', () => {});
        chartRef.current?.removeEventListener('mouseleave', () => {});
        chart.dispose();
      };
    }
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>Technical Expertise</h2>
      <p>
        I've developed expertise in various technologies and methodologies
        throughout my career, with a focus on full stack development,
        Python programming, and UI/UX design.
      </p>

      <div className="skills-content">
        {/* Radar Chart */}
        <div className="skills-chart" ref={chartRef}></div>

        {/* Bars + Tools */}
        <div className="skills-details">
          {[
            { name: "Frontend Development", percentage: 95 },
            { name: "UI/UX Design", percentage: 85 },
            { name: "Backend Development", percentage: 80 },
            { name: "Mobile Development", percentage: 75 },
            { name: "DevOps", percentage: 70 },
          ].map((skill, index) => (
            <div className="bar-container" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bar-header">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bg">
                <div
                  className="progress-fill"
                  style={{
                    width: `${skill.percentage}%`,
                    animationDelay: `${0.5 + index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}

          <div className="tools">
            <h3>Tools & Technologies</h3>
            <div className="tags">
              {[
                "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Kivy",
                "Python", "Git", "Figma", "UI/UX Design", "Webpack", "Jest", "Docker",
              ].map((tool, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles for decoration */}
      {[...Array(5)].map((_, i) => {
        const size = Math.random() * 6 + 2;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        return (
          <div
            key={`particle-${i}`}
            className="floating-particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
    </section>
  );
};

export default Skills;