package br.com.product.app.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.nio.file.Files;

@CrossOrigin
@RestController
@RequestMapping("/images")

public class ImageController {

	@PostMapping
	public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file)
	{
		if (file.isEmpty()) {
			throw new RuntimeException("File given is not a valid!");
		}
		
		String folder = "/home/shocker/uploads/";
		
		try {
			Path pathFolder = Paths.get(folder);
			Files.createDirectories(pathFolder);
			
			Path pathFile = Paths.get(folder + file.getOriginalFilename());
			
			Files.write(pathFile, file.getBytes());
			
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return new ResponseEntity(HttpStatus.OK);
	}

}
