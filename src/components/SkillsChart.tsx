
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Skill, getSkillsByCategory } from '../data/skills';

Chart.register(...registerables);

const SkillsChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const radarChartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const radarChartInstanceRef = useRef<Chart | null>(null);

  // Get top skills from each category
  const getTopSkills = () => {
    const categories = ['frontend', 'backend', 'security', 'ai', 'devops'] as const;
    
    // Get top 3 skills from each category
    return categories.flatMap(category => {
      const skills = getSkillsByCategory(category);
      return skills.sort((a, b) => b.level - a.level).slice(0, 3);
    });
  };

  const getCategoryAverages = () => {
    const categories = ['frontend', 'backend', 'security', 'ai', 'devops'] as const;
    const categoryLabels = {
      frontend: 'Frontend',
      backend: 'Backend',
      security: 'Segurança',
      ai: 'IA/ML',
      devops: 'DevOps'
    };
    
    return categories.map(category => {
      const skills = getSkillsByCategory(category);
      const avg = skills.reduce((sum, skill) => sum + skill.level, 0) / (skills.length || 1);
      return {
        category: categoryLabels[category],
        value: Math.round(avg)
      };
    });
  };

  useEffect(() => {
    if (chartRef.current && radarChartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const radarCtx = radarChartRef.current.getContext('2d');
      
      if (ctx && radarCtx) {
        // Destroy previous chart instances if they exist
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        
        if (radarChartInstanceRef.current) {
          radarChartInstanceRef.current.destroy();
        }
        
        // Get top skills for bar chart
        const topSkills = getTopSkills();
        
        // Get category averages for radar chart
        const categoryAverages = getCategoryAverages();

        // Bar Chart Configuration
        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: topSkills.map(skill => skill.name),
            datasets: [{
              label: 'Proficiência',
              data: topSkills.map(skill => skill.level),
              backgroundColor: [
                'rgba(0, 240, 255, 0.7)',
                'rgba(55, 162, 255, 0.7)',
                'rgba(111, 117, 255, 0.7)',
                'rgba(143, 95, 255, 0.7)',
                'rgba(181, 55, 242, 0.7)',
                'rgba(0, 240, 255, 0.7)',
                'rgba(55, 162, 255, 0.7)',
                'rgba(111, 117, 255, 0.7)',
                'rgba(143, 95, 255, 0.7)',
                'rgba(181, 55, 242, 0.7)',
                'rgba(0, 240, 255, 0.7)',
                'rgba(55, 162, 255, 0.7)',
                'rgba(111, 117, 255, 0.7)',
                'rgba(143, 95, 255, 0.7)',
                'rgba(181, 55, 242, 0.7)',
              ],
              borderColor: [
                'rgba(0, 240, 255, 1)',
                'rgba(55, 162, 255, 1)',
                'rgba(111, 117, 255, 1)',
                'rgba(143, 95, 255, 1)',
                'rgba(181, 55, 242, 1)',
                'rgba(0, 240, 255, 1)',
                'rgba(55, 162, 255, 1)',
                'rgba(111, 117, 255, 1)',
                'rgba(143, 95, 255, 1)',
                'rgba(181, 55, 242, 1)',
                'rgba(0, 240, 255, 1)',
                'rgba(55, 162, 255, 1)',
                'rgba(111, 117, 255, 1)',
                'rgba(143, 95, 255, 1)',
                'rgba(181, 55, 242, 1)',
              ],
              borderWidth: 1,
              borderRadius: 4,
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'rgba(0, 240, 255, 1)',
                bodyColor: '#fff',
                borderColor: 'rgba(0, 240, 255, 0.3)',
                borderWidth: 1,
              }
            },
            scales: {
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.05)',
                },
                ticks: {
                  color: 'rgba(255, 255, 255, 0.7)',
                }
              },
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  color: 'rgba(255, 255, 255, 0.05)',
                },
                ticks: {
                  color: 'rgba(255, 255, 255, 0.7)',
                }
              }
            }
          }
        });

        // Radar Chart Configuration
        radarChartInstanceRef.current = new Chart(radarCtx, {
          type: 'radar',
          data: {
            labels: categoryAverages.map(item => item.category),
            datasets: [{
              label: 'Competência por Área',
              data: categoryAverages.map(item => item.value),
              backgroundColor: 'rgba(181, 55, 242, 0.2)',
              borderColor: 'rgba(181, 55, 242, 1)',
              pointBackgroundColor: 'rgba(0, 240, 255, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(181, 55, 242, 1)',
              borderWidth: 2,
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'rgba(0, 240, 255, 1)',
                bodyColor: '#fff',
                borderColor: 'rgba(0, 240, 255, 0.3)',
                borderWidth: 1,
              }
            },
            scales: {
              r: {
                min: 0,
                max: 100,
                ticks: {
                  display: false,
                  stepSize: 20,
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                angleLines: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                pointLabels: {
                  font: {
                    family: 'Inter',
                    size: 12,
                  },
                  color: 'rgba(255, 255, 255, 0.7)',
                }
              }
            }
          }
        });
      }
    }
    
    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      if (radarChartInstanceRef.current) {
        radarChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="cyber-box rounded-lg p-6 backdrop-blur-sm">
        <h3 className="text-xl font-display font-semibold cyber-gradient-text mb-6">
          Top Habilidades
        </h3>
        <div className="h-80">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
      
      <div className="cyber-box rounded-lg p-6 backdrop-blur-sm">
        <h3 className="text-xl font-display font-semibold cyber-gradient-text mb-6">
          Competências por Área
        </h3>
        <div className="h-80">
          <canvas ref={radarChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;
