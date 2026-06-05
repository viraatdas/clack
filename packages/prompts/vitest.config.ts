import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		env: {
			FORCE_COLOR: '1',
			TERM: 'xterm-256color',
		},
		snapshotSerializers: ['vitest-ansi-serializer'],
	},
});
