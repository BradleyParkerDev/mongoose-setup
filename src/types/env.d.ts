declare namespace NodeJS {
	interface ProcessEnv {
		PORT: string;
		ATLAS_URI: string;
		MONGO_DATABASE?: string;
	}
}
  
