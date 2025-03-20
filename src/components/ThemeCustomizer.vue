<template>
  <div class="theme-customizer">
    <button class="button is-small is-primary" @click="toggleCustomizer">
      <span class="icon">
        <i class="fas fa-paint-brush"></i>
      </span>
      <span>Personalizar Tema</span>
    </button>
    
    <div class="customizer-panel" :class="{ 'is-active': isActive }">
      <div class="customizer-header">
        <h3 class="title is-5">Personalizador de Tema</h3>
        <button class="delete" @click="toggleCustomizer"></button>
      </div>
      
      <div class="customizer-body">
        <div class="field">
          <label class="label">Color Primario</label>
          <div class="control">
            <input type="color" v-model="primaryColor" @change="updateColors">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Color Secundario</label>
          <div class="control">
            <input type="color" v-model="secondaryColor" @change="updateColors">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Color de Acento</label>
          <div class="control">
            <input type="color" v-model="accentColor" @change="updateColors">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Color de Fondo</label>
          <div class="control">
            <input type="color" v-model="backgroundColor" @change="updateColors">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Color de Texto</label>
          <div class="control">
            <input type="color" v-model="textColor" @change="updateColors">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Tamaño de Fuente</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="fontSize" @change="updateFontSize">
                <option value="small">Pequeño</option>
                <option value="medium">Mediano</option>
                <option value="large">Grande</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth" @click="resetDefaults">
              Restablecer Valores Predeterminados
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeCustomizer',
  data() {
    return {
      isActive: false,
      primaryColor: '#3273dc',
      secondaryColor: '#00d1b2',
      accentColor: '#209cee',
      backgroundColor: '#ffffff',
      textColor: '#4a4a4a',
      fontSize: 'medium'
    }
  },
  methods: {
    toggleCustomizer() {
      this.isActive = !this.isActive
    },
    updateColors() {
      document.documentElement.style.setProperty('--primary-color', this.primaryColor)
      document.documentElement.style.setProperty('--primary-light', this.lightenColor(this.primaryColor, 10))
      document.documentElement.style.setProperty('--primary-dark', this.darkenColor(this.primaryColor, 10))
      
      document.documentElement.style.setProperty('--secondary-color', this.secondaryColor)
      document.documentElement.style.setProperty('--secondary-light', this.lightenColor(this.secondaryColor, 10))
      document.documentElement.style.setProperty('--secondary-dark', this.darkenColor(this.secondaryColor, 10))
      
      document.documentElement.style.setProperty('--accent-color', this.accentColor)
      document.documentElement.style.setProperty('--accent-light', this.lightenColor(this.accentColor, 10))
      document.documentElement.style.setProperty('--accent-dark', this.darkenColor(this.accentColor, 10))
      
      document.documentElement.style.setProperty('--background-color', this.backgroundColor)
      document.documentElement.style.setProperty('--text-color', this.textColor)
    },
    updateFontSize() {
      const rootFontSize = this.fontSize === 'small' ? '14px' : this.fontSize === 'medium' ? '16px' : '18px'
      document.documentElement.style.fontSize = rootFontSize
    },
    resetDefaults() {
      this.primaryColor = '#3273dc'
      this.secondaryColor = '#00d1b2'
      this.accentColor = '#209cee'
      this.backgroundColor = '#ffffff'
      this.textColor = '#4a4a4a'
      this.fontSize = 'medium'
      this.updateColors()
      this.updateFontSize()
    },
    lightenColor(color, percent) {
      const num = parseInt(color.replace('#', ''), 16)
      const amt = Math.round(2.55 * percent)
      const R = (num >> 16) + amt
      const G = (num >> 8 & 0x00FF) + amt
      const B = (num & 0x0000FF) + amt
      return '#' + (
        0x1000000 + 
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + 
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + 
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      ).toString(16).slice(1)
    },
    darkenColor(color, percent) {
      const num = parseInt(color.replace('#', ''), 16)
      const amt = Math.round(2.55 * percent)
      const R = (num >> 16) - amt
      const G = (num >> 8 & 0x00FF) - amt
      const B = (num & 0x0000FF) - amt
      return '#' + (
        0x1000000 + 
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + 
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + 
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      ).toString(16).slice(1)
    }
  }
}
</script>

<style scoped>
.theme-customizer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.customizer-panel {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right var(--transition-normal);
  z-index: 1001;
  overflow-y: auto;
}

.customizer-panel.is-active {
  right: 0;
}

.customizer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.customizer-body {
  padding: 1rem;
}

.field {
  margin-bottom: 1.5rem;
}
</style>

