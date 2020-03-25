/**
 * Возвращает глубокий вложенный проп
 *
 * @param {object} state
 * @param {string} key
 */
function getNestedModule(state, key) {
  return key.split('.').reduce((child, key) => {
    if (child && key in child) return child[key]
    return undefined
  }, state)
}

export default {
  state: {
    company: {
      admin: {
        partners: {
          title: 'Партнёры',
          tabsProps: {
            tabs: [
              { title: 'Заявки', isLink: true, href: 'company-admin-partners-requests' },
              { title: 'Активные', isLink: true, href: 'company-admin-partners-active' },
              { title: 'Заблокированные', isLink: true },
              { title: 'Архив', isLink: true }
            ],
            selectedTab: 0
          },
          buttons: [
            { title: 'search', hint: 'Поиск' },
            { title: 'add', hint: 'Пригласить' },
            { title: 'download', hint: 'Экспортировать' }
          ],
          searchProps: {
            list: [
              { title: 'По ID', isCheckboxVisible: true, checkboxId: 'search1' },
              { title: 'Дата заявки', isCheckboxVisible: true, checkboxId: 'search2' },
              { title: 'Дата блокирования', isCheckboxVisible: true, checkboxId: 'search3' },
              { title: 'Дата удаления', isCheckboxVisible: true, checkboxId: 'search4' },
              { title: 'Партнёр', isCheckboxVisible: true, checkboxId: 'search5' }
            ]
          }
        }
      },
      managerPPS: {
        shared: {
          profile: {
            brunch: {
              title: 'Западно-Сибирский филиал',
              linksBack: [{ title: 'Долевые ППС', href: 'company-manager-pps-shared' }],
              tabsProps: {
                tabs: [
                  { title: 'Роли', isLink: true, href: 'company-manager-pps-shared-profile-brunch-role' },
                  { title: 'Статистика', isLink: true },
                  { title: 'Клубы', isLink: true }
                ]
              },
              buttons: [{ title: 'add', hint: 'Добавить' }]
            }
          }
        }
      }
    }
  },
  mutations: {
    SET_HEADER_TAB_INDEX(state, value) {
      state.company.admin.partners.tabsProps.selectedTab = value
    },
    SET_HEADER_TAB_INDEX_IN_MODULE(state, { module, tabIndex }) {
      const nestedModule = getNestedModule(state, module)
      nestedModule.tabsProps.selectedTab = tabIndex
    }
  },
  actions: {
    setActiveTabIndex({ commit }, tabIndex) {
      commit('SET_HEADER_TAB_INDEX', tabIndex)
    },
    setActiveTabAuto({ state, commit }, module) {
      const path = window.location.pathname.split('/')
      const href = path[path.length - 1]

      const tabIndex = state.company.admin.partners.tabsProps.tabs.findIndex(tab => href === tab.href)
      commit('SET_HEADER_TAB_INDEX_IN_MODULE', {
        module,
        tabIndex
      })
    }
  },
  namespaced: true
}
