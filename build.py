import os
import subprocess
import sys

try:
    import jinja2
except ModuleNotFoundError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "jinja2"])
    import jinja2

SOURCES = f"{os.path.dirname(os.path.abspath(__file__))}/_sources/"
FILES = ["index.html"]
TEMPLATE = "_template.html"
VARIABLES = {}


def render_template(file):
    env = jinja2.Environment(loader=jinja2.FileSystemLoader(SOURCES))
    return env.get_template(file).render(**VARIABLES, TEMPLATE=TEMPLATE)


def main():
    for item in FILES:
        with open(item, "w") as out:
            try:
                os.makedirs(os.path.dirname(item))
            except FileNotFoundError:
                pass

            out.write(render_template(item))


if __name__ == "__main__":
    main()
