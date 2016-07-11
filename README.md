# lair-docker
This is a dockerized version of the [Lair Framework](https://github.com/lair-framework/lair). An attempt to take all the steps from the [Installation Instructions](https://github.com/lair-framework/lair/wiki/Installation) and simplify it to a few simple commands.

It also includes [ngrok](https://ngrok.com/), to help automate the process of sharing your Lair instance with co-workers.

This was inspired and built off the initial work done by [b00stfr3ak](https://github.com/b00stfr3ak) here: [https://github.com/b00stfr3ak/dockerfiles/tree/master/lair](https://github.com/b00stfr3ak/dockerfiles/tree/master/lair);

## Installation

First make sure you have docker installed. Here are [OS X Beta](https://docs.docker.com/docker-for-mac/) and [Linux](https://docs.docker.com/linux/step_one/) instructions.

```bash
$ git clone https://github.com/ryhanson/lair-docker.git
$ cd lair-docker
$ docker-compose build
$ docker-compose up
```

If everything worked, you should see something like:
```bash
lair_setup   | MongoDB shell version: 3.2.7
lair_setup   | connecting to: lairdb:27017/admin
lair_setup   | "Replication set initialized."
lair_caddy   | Activating privacy features... done.
lair_caddy   | 0.0.0.0:11013
lair_caddy   | 0.0.0.0:11012
lair_setup exited with code 0
lair_lair    | Created admin@localhost with password 1234abcd5678ef
lair_ngrok   | 2016/06/20 06:29:41 Lair is available at https://abcd1234.ngrok.io
lair_api     | 2016/06/20 06:29:42 Listening on 0.0.0.0:11015
```

Copy, paste, save, or write down your admin credentials. Then you can press `Ctrl+C` to stop all the services.

## Usage

Before running any `docker-compose` commands, make sure you are in the `lair-docker` directory.

When you are ready to start up Lair again, run: 
```bash
$ docker-compose start
```

To find the ngrok URL, run:
```bash
$ docker logs lair_ngrok
```

If you do not want Lair to be exposed publicly, run:
```bash
$ docker-compose stop ngrok
```

To re-start ngrok after it has been stopped, run:
```bash
$ docker-compose start ngrok
```

To stop all Lair services, run:
```bash
$ docker-compose stop
```

### Bash aliases

Here are some of the bash profile aliases I created for Lair, just replace [lair-docker] with your absolute path:
```bash
alias start-lair="cd [lair-docker] && docker-compose start && docker logs lair_ngrok | awk '/ngrok.io/ {x=\$0} END{print x}'"
alias stop-lair="cd [lair-docker] && docker-compose stop"
```