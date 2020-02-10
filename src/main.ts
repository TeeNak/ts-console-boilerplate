import * as cmdr from "commander";

export class Startup {
	public static main(): number {

		cmdr
			.usage("[options] ")
			.option("-p, --print", "print hello")
			;

		if (process.argv.slice(2).length <= 0) {
			cmdr.outputHelp();
			return 0;
		}

		cmdr.parse(process.argv);

		if (cmdr.print !== undefined) {
			console.log(" hello: %s", cmdr.print);
		}

		return 0;
	}
}

Startup.main();
