// Sample Node.js application
console.log('🚀 Demo CI/CD Application Started!');
console.log('✅ Build and Deploy Pipeline is Working!');

// Sample function
function greet(name) {
  return `Hello, ${name}! Welcome to CI/CD demo.`;
}

// Export for testing
export { greet };

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet('Developer'));
}
