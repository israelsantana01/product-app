package br.com.product.app.controllers;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletResponse;

import java.io.File;
import java.io.IOException;
import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.file.Files;

@CrossOrigin
@RestController
@RequestMapping("/images")

public class ImageController {

	@GetMapping("{pid}")
	public void downloadImage(@PathVariable("pid") String pid, HttpServletResponse response)
	{
		try {
			File fileToDownload = new File("/home/shocker/uploads/" + pid);
			
			try (InputStream inputStream = new FileInputStream(fileToDownload)){
				response.setContentType("application/force-download");
				response.setHeader("Content-Disposition", "attachment; filename=" + pid);
				IOUtils.copy(inputStream, response.getOutputStream());
				response.flushBuffer();
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@PostMapping
	public ResponseEntity<?> uploadImage(@RequestParam("pid") String pid, // photo id
			@RequestParam("file") MultipartFile file)
	{
		if (file.isEmpty()) {
			throw new RuntimeException("File given is not a valid!");
		}

		String folder = "/home/shocker/uploads/";

		try {
			Path pathFolder = Paths.get(folder);
			Files.createDirectories(pathFolder);

			Path pathFile = Paths.get(folder + pid);

			Files.write(pathFile, file.getBytes());

		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return new ResponseEntity(HttpStatus.OK);
	}
	
	@DeleteMapping("{pid}")
	public void deleteFile(@PathVariable("pid") String pid) {
		try {
			Path pathFile = Paths.get("/home/shocker/uploads/" + pid);			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
