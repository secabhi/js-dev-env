import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

console.log(chalk.blue('Generating production build , this may take a while...'))

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err,stats) => {
  if(err){
    console.log(chalk.red(err));
    return 1;
  }
  return 0;
})

const jsonStat = stats.toJson();

if(jsonStat.hasErrors){
  return jsonStat.errors.map(error=>console.log(chalk.red(error)))
}

if(jsonStat.hasWarnings){
  console.log(chalk.yellow('Warning found : '));
  return jsonStat.warnings.map(warning=>console.log(chalk.yellow(warning)));
}

console.log(`Webpack stats : ${stats}`);

console.log(chalk.green('Your production build is ready in /dist folder'));

return 0;
