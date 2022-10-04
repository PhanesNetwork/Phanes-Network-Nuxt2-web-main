export { default as ChooseUs } from '../../components/ChooseUs.vue'
export { default as EcosystemCollector } from '../../components/EcosystemCollector.vue'
export { default as FooterComp } from '../../components/FooterComp.vue'
export { default as Governance } from '../../components/Governance.vue'
export { default as HeaderComp } from '../../components/HeaderComp.vue'
export { default as HowWorks } from '../../components/HowWorks.vue'
export { default as ListedOn } from '../../components/ListedOn.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Partners } from '../../components/Partners.vue'
export { default as PhanesEcosystem } from '../../components/PhanesEcosystem.vue'
export { default as PhanesToken } from '../../components/PhanesToken.vue'
export { default as YourAssets } from '../../components/YourAssets.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
