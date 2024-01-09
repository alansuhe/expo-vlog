import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const LOCAL_STORAGE_KEYS = {
    SETTINGS: 'expo_vlog_settings'
}

type SettingsType = {
    isDark: boolean
}
interface SettingsState extends SettingsType {
    // isDark: boolean
    updateSettings: (pairs: SettingsType) => void
}

export const useSettings = create<SettingsState>()(
    persist((set) => ({
        isDark: true,
        updateSettings: pairs => set((state) => ({ ...state, ...pairs }))
    }),
        {
            name: LOCAL_STORAGE_KEYS.SETTINGS,
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)