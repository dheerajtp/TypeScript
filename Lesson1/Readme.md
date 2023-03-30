## TypeScript -- Lesson 1


1. To compile typescript file 

```
tsc main.ts
```

where main.ts is the filename

2. Whenever there is a change in typescript file we need to recompile it to see the change so instead of recompile it every time when i make a change we can use **-w** which stands for watch

```
tsc main.ts -w
```


### Create a tsconfig.json file 

To Create a tsconfig.json file 

```
tsc --inti
```


This file allows us to specify various configuration options for the TypeScript compiler, such as which files to include or exclude, which version of ECMAScript to target, and whether to use source maps or not.

By creating a tsconfig.json file, we can avoid having to specify these options every time we want to compile our TypeScript code. Instead, we can simply run the tsc command in the terminal, and the compiler will use the configuration settings specified in the tsconfig.json file.

1. Add Source and Out directory 

2. Now we can compile it using **tsc -w** command to watch changes to the files.

3. To ignore any ts file outside src directory add include to tsconfig.json file

4. To not compile to javascript if there is any error in ts file we can use **"noEmitOnError": true,** in tsconfig.json file