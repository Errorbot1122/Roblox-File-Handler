npm config set prefix '~/.npm-global'
touch ~/.profile
export PATH=~/.npm-global/bin:$PATH
source ~/.profile

# Set NPM stuff
#npm config set prefix '~/.npm-global'
#export PATH=~/.npm-global/bin:$PATH

# Create the .profile file at root dir
#
#source ~/.profile