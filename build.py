import os
import subprocess
import sys

try:
    import jinja2
except ModuleNotFoundError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "jinja2"])
    import jinja2

SOURCES = f"{os.path.dirname(os.path.abspath(__file__))}/src/"
FILES = {"index.html": {}, "projects.html": {}}
TEMPLATE = "_template.html"


def render_template(file, variables):
    env = jinja2.Environment(loader=jinja2.FileSystemLoader(SOURCES))
    return env.get_template(file).render(TEMPLATE=TEMPLATE, **variables)


def main():
    for item, variables in FILES.items():
        with open(item, "w") as out:
            try:
                os.makedirs(os.path.dirname(item))
            except FileNotFoundError:
                pass

            out.write(render_template(item, variables))


if __name__ == "__main__":
    main()
