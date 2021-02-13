#vars
tag=0
REPO=orky161
ORGANIZATION=test
PROJECT=rabbit_k8s
IMAGE=${REPO}/${ORGANIZATION}-${PROJECT}:${tag}

build:
	    @docker image build -t ${IMAGE} .

push:
	    @docker push ${IMAGE}

all: build push
