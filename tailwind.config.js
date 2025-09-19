/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from Operator Skills Hub
        brand: {
          50: '#F9FAFB',    // Light gray background
          100: '#E0F2F7',   // Light blue (active tabs)
          200: '#E5E7EB',   // Light gray borders
          600: '#6B7280',   // Gray text
          700: '#4B5563',   // Dark gray text
          800: '#1E40AF',   // Dark blue
          900: '#004D40',   // Dark teal branding
        },
        primary: {
          50: '#E0F2F7',    // Light blue
          100: '#D1FAE5',   // Light green
          500: '#1D4ED8',   // Main blue
          600: '#059669',   // Green
          700: '#1D4ED8',   // Blue
          800: '#1E40AF',   // Dark blue
          900: '#004D40',   // Dark teal
        },
        success: {
          50: '#D1FAE5',    // Light green
          100: '#D1FAE5',   // Light green
          500: '#10b981',   // Green
          600: '#059669',   // Green
        },
        warning: {
          50: '#FFF7ED',    // Light orange
          100: '#FFF7ED',   // Light orange
          500: '#F59E0B',   // Amber
          600: '#D97706',   // Orange
        },
        danger: {
          50: '#FEF2F2',    // Light red
          100: '#FEF2F2',   // Light red
          500: '#ef4444',   // Red
          600: '#DC2626',   // Red
        },
        purple: {
          500: '#8B5CF6',   // Purple for completion rate
        }
      }
    }
  },
  plugins: [],
}
