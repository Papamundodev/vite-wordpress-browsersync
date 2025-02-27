<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitce72965cfcb3dc69243f5b10fe843563
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitce72965cfcb3dc69243f5b10fe843563', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitce72965cfcb3dc69243f5b10fe843563', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitce72965cfcb3dc69243f5b10fe843563::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
