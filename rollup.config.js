export default {
  input: 'dist/index.js',
  output: [
    {
      format: 'umd',
      file: 'build/ecs.js',
      name: 'ECS',
      indent: '\t',
    },
  ],
  watch: {
    inclue: './dist/**/*.js',
  },
};