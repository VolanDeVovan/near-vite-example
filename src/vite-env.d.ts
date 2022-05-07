/// <reference types="vite/client" />


interface ImportMetaEnv {
  // more env variables...
  readonly VITE_CONTRACT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}