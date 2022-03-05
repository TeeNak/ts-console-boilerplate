import { program } from "commander";

export class Startup {
	public static main(): number {

		program
			.usage("[options] ")
			.option("-p, --print", "print hello")
			;

		if (process.argv.slice(2).length <= 0) {
			program.outputHelp();
			return 0;
		}

		program.parse(process.argv);
		const options = program.opts();

		if (options.print !== undefined) {
			console.log(" hello: %s", options.print);
		}

		return 0;
	}
}

process.exitCode = Startup.main();
