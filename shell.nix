with import (<nixpkgs>) {};

stdenv.mkDerivation {
  name = "bugzilla-vue";
  buildInputs = [
    nodejs-14_x
  ];
}
