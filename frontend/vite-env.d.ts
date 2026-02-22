/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_OTHER_VAR?: string
  // add all your env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}